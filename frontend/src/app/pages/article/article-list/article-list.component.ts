import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: any[] = [];
  categories: any[] = [];
  loading = true;
  search = '';
  category = '';
  pagination: any = { page: 1, limit: 9, total: 0, totalPages: 0 };
  pageNumbers: number[] = [];
  constructor(private api: ApiService) {}
  ngOnInit() { this.loadCategories(); this.loadArticles(); }
  loadCategories() { this.api.getArticleCategories().subscribe(data => { this.categories = data; }); }
  loadArticles() {
    this.loading = true;
    const params: any = { page: this.pagination.page, limit: 9, category: this.category };
    if (this.search) params.search = this.search;
    this.api.getArticles(params).subscribe(res => {
      this.articles = res.data;
      this.pagination = res.pagination;
      this.pageNumbers = Array.from({length: Math.min(5, res.pagination.totalPages)}, (_, i) => i + 1);
      this.loading = false;
    }, () => { this.loading = false; });
  }
  goToPage(p: number) { this.pagination.page = p; this.loadArticles(); }
}
