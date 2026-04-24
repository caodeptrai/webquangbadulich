import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-admin-destinations',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class AdminDestinationsComponent implements OnInit {
  data: any[] = [];
  loading = true;
  search = '';
  pagination: any = { page: 1, limit: 20, total: 0, totalPages: 0 };
  pageNumbers: number[] = [];
  constructor(private api: ApiService) {}
  ngOnInit() { this.load(); }
  load() {
    this.loading = true;
    const params: any = { page: this.pagination.page, limit: 20 };
    if (this.search) params.search = this.search;
    this.api.getDestinations(params).subscribe(res => {
      this.data = res.data;
      this.pagination = res.pagination;
      this.pageNumbers = Array.from({length: Math.min(5, res.pagination.totalPages)}, (_, i) => i + 1);
      this.loading = false;
    }, () => { this.loading = false; });
  }
  goToPage(p: number) { this.pagination.page = p; this.load(); }
  delete(id: string) {
    if (confirm('Xác nhận xóa?')) {
      this.api.deleteDestination(id).subscribe(() => this.load());
    }
  }
}
