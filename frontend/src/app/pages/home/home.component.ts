import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredDestinations: any[] = [];
  featuredTours: any[] = [];
  recentArticles: any[] = [];
  loadingDestinations = true;
  loadingTours = true;
  loadingArticles = true;
  searchKeyword = '';
  searchCategory = '';
  contactName = '';
  contactEmail = '';
  contactMessage = '';
  contactSuccess = false;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadFeaturedDestinations();
    this.loadFeaturedTours();
    this.loadRecentArticles();
  }

  loadFeaturedDestinations() {
    this.api.getFeaturedDestinations().subscribe({
      next: (data) => { this.featuredDestinations = data; this.loadingDestinations = false; },
      error: () => { this.loadingDestinations = false; }
    });
  }

  loadFeaturedTours() {
    this.api.getFeaturedTours().subscribe({
      next: (data) => { this.featuredTours = data; this.loadingTours = false; },
      error: () => { this.loadingTours = false; }
    });
  }

  loadRecentArticles() {
    this.api.getRecentArticles().subscribe({
      next: (data) => { this.recentArticles = data; this.loadingArticles = false; },
      error: () => { this.loadingArticles = false; }
    });
  }

  search() {
    const params: any = {};
    if (this.searchKeyword) params.search = this.searchKeyword;
    if (this.searchCategory) params.category = this.searchCategory;
    window.location.href = `/destinations?${Object.entries(params).map(([k,v]) => `${k}=${v}`).join('&')}`;
  }

  getDiscount(tour: any): number {
    if (!tour.discountPrice) return 0;
    return Math.round((1 - tour.discountPrice / tour.price) * 100);
  }

  requestTour(tour: any) {
    window.location.href = '/contact';
  }

  submitQuickContact() {
    if (!this.contactName || !this.contactEmail || !this.contactMessage) return;
    this.api.createInquiry({
      name: this.contactName,
      email: this.contactEmail,
      message: this.contactMessage,
      subject: 'Yêu cầu tư vấn nhanh từ trang chủ',
      type: 'contact'
    }).subscribe({
      next: () => {
        this.contactSuccess = true;
        this.contactName = '';
        this.contactEmail = '';
        this.contactMessage = '';
        setTimeout(() => this.contactSuccess = false, 5000);
      }
    });
  }
}
