import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-destination-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.css']
})
export class DestinationDetailComponent implements OnInit {
  destination: any = null;
  relatedDestinations: any[] = [];
  reviews: any[] = [];
  isFavorite = false;
  loadingError = false;
  newReview: any = { rating: 0, comment: '' };
  reviewSuccess = false;

  constructor(private api: ApiService, public auth: AuthService, private route: ActivatedRoute) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug') || this.route.snapshot.paramMap.get('id');
    this.loadDestination(slug!);
  }

  loadDestination(slug: string) {
    this.api.getDestination(slug).subscribe({
      next: (data) => {
        this.destination = data;
        this.relatedDestinations = data.relatedTo?.map((r: any) => r.from).filter(Boolean) || [];
        this.reviews = data.reviews || [];
        if (this.auth.isLoggedIn()) this.checkFavorite();
      },
      error: () => { this.loadingError = true; }
    });
  }

  getHighlights(): string[] {
    if (!this.destination?.highlights) return [];
    try { return JSON.parse(this.destination.highlights); } catch { return []; }
  }

  toggleFavorite() {
    if (!this.auth.isLoggedIn()) return;
    if (this.isFavorite) {
      this.api.removeFavorite(this.destination.id).subscribe(() => { this.isFavorite = false; });
    } else {
      this.api.addFavorite(this.destination.id).subscribe(() => { this.isFavorite = true; });
    }
  }

  checkFavorite() {
    this.api.checkFavorite(this.destination.id).subscribe((res) => { this.isFavorite = res.isFavorite; });
  }

  submitReview() {
    if (!this.newReview.rating || !this.newReview.comment.trim()) return;
    this.api.createReview({
      destinationId: this.destination.id,
      rating: this.newReview.rating,
      comment: this.newReview.comment,
    }).subscribe({
      next: (res) => {
        this.reviews.unshift(res);
        this.newReview = { rating: 0, comment: '' };
        this.reviewSuccess = true;
        setTimeout(() => this.reviewSuccess = false, 3000);
      }
    });
  }
}
