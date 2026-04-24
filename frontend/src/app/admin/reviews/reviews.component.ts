import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: any[] = [];
  loading = true;
  constructor(private api: ApiService) {}
  ngOnInit() {
    this.api.getDestinations({ limit: 30 }).subscribe((res: any) => {
      const allReviews: any[] = [];
      res.data.forEach((d: any) => {
        if (d.reviews) allReviews.push(...d.reviews);
      });
      this.reviews = allReviews.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      this.loading = false;
    }, () => { this.loading = false; });
  }
  delete(id: string) {
    if (confirm('Xác nhận xóa đánh giá?')) this.api.deleteReview(id).subscribe(() => this.ngOnInit());
  }
  getStars(rating: number): string[] {
    return Array(5).fill(0).map((_, i) => i < rating ? '★' : '☆');
  }
}
