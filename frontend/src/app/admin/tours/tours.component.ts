import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-admin-tours',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class AdminToursComponent implements OnInit {
  data: any[] = [];
  loading = true;
  search = '';
  constructor(private api: ApiService) {}
  ngOnInit() { this.load(); }
  load() {
    this.loading = true;
    const params: any = {};
    if (this.search) params.search = this.search;
    this.api.getTours(params).subscribe(res => { this.data = res.data; this.loading = false; }, () => { this.loading = false; });
  }
  delete(id: string) { if (confirm('Xác nhận xóa?')) this.api.deleteTour(id).subscribe(() => this.load()); }
}
