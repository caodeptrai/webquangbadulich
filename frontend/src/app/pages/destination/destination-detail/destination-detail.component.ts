import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { AuthService } from '../../../core/services/auth.service';
import { ConfirmDialogService } from '../../../shared/services/confirm-dialog.service';

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
  userReview: any = null;
  isEditingReview = false;

  constructor(
    private api: ApiService,
    public auth: AuthService,
    private route: ActivatedRoute,
    private confirmDialog: ConfirmDialogService
  ) {}

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
        if (this.auth.isLoggedIn()) {
          this.checkFavorite();
          this.findUserReview();
        }
      },
      error: () => { this.loadingError = true; }
    });
  }

  findUserReview() {
    const userId = this.auth.user()?.id;
    if (!userId || !this.destination) return;
    const found = this.reviews.find((r: any) => r.user?.id === userId);
    if (found) {
      this.userReview = found;
      this.newReview = { rating: found.rating, comment: found.comment };
    }
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
        this.userReview = res;
        this.newReview = { rating: 0, comment: '' };
        this.isEditingReview = false;
        this.reviewSuccess = true;
        setTimeout(() => this.reviewSuccess = false, 3000);
      }
    });
  }

  editReview() {
    this.isEditingReview = true;
  }

  cancelEdit() {
    this.isEditingReview = false;
    if (this.userReview) {
      this.newReview = { rating: this.userReview.rating, comment: this.userReview.comment };
    }
  }

  saveReview() {
    if (!this.newReview.rating || !this.newReview.comment.trim()) return;
    this.api.createReview({
      destinationId: this.destination.id,
      rating: this.newReview.rating,
      comment: this.newReview.comment,
    }).subscribe({
      next: (res) => {
        const idx = this.reviews.findIndex((r: any) => r.id === this.userReview.id);
        if (idx !== -1) this.reviews[idx] = res;
        this.userReview = res;
        this.isEditingReview = false;
        this.reviewSuccess = true;
        setTimeout(() => this.reviewSuccess = false, 3000);
      }
    });
  }

  async deleteReview() {
    if (!this.userReview) return;

    const confirmed = await this.confirmDialog.confirm({
      title: 'Xoá đánh giá?',
      message: 'Đánh giá của bạn sẽ bị xoá vĩnh viễn khỏi điểm đến này.',
      confirmText: 'Xoá đánh giá',
    });
    if (!confirmed) return;

    this.api.deleteReview(this.userReview.id).subscribe({
      next: () => {
        this.reviews = this.reviews.filter((r: any) => r.id !== this.userReview.id);
        this.userReview = null;
        this.newReview = { rating: 0, comment: '' };
        this.isEditingReview = false;
      }
    });
  }
}
