import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-admin-bookings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class AdminBookingsComponent implements OnInit {
  data: any[] = [];
  loading = true;
  status = '';
  page = 1;
  total = 0;

  constructor(private api: ApiService) {}

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    this.api.getBookings({ page: this.page, limit: 10, status: this.status }).subscribe({
      next: res => { this.data = res.data || []; this.total = res.pagination?.total || 0; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  updateStatus(booking: any, status: string) {
    this.api.updateBookingStatus(booking.id, status).subscribe({
      next: res => booking.status = res.booking?.status || status,
      error: err => alert(err.error?.error || 'Không thể cập nhật trạng thái'),
    });
  }

  statusLabel(status: string) {
    return ({ pending: 'Chờ xác nhận', confirmed: 'Đã xác nhận', cancelled: 'Đã hủy' } as any)[status] || status;
  }
}
