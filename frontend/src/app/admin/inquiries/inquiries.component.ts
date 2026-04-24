import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-admin-inquiries',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.css']
})
export class AdminInquiriesComponent implements OnInit {
  inquiries: any[] = [];
  loading = true;
  filterStatus = '';
  constructor(private api: ApiService) {}
  ngOnInit() { this.load(); }
  load() {
    this.loading = true;
    const params: any = {};
    if (this.filterStatus) params.status = this.filterStatus;
    this.api.getInquiries(params).subscribe((data: any) => { this.inquiries = data.data; this.loading = false; }, () => { this.loading = false; });
  }
  updateStatus(inq: any) {
    this.api.updateInquiry(inq.id, { status: inq.status }).subscribe();
  }
  delete(id: string) {
    if (confirm('Xác nhận xóa?')) this.api.deleteInquiry(id).subscribe(() => this.load());
  }
}
