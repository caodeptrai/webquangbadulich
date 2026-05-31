import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings: any[] = [];
  loading = true;
  error = '';

  constructor(private api: ApiService) {}

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    this.api.getMyBookings().subscribe({
      next: data => { this.bookings = data; this.loading = false; },
      error: () => { this.error = 'Không thể tải lịch sử đặt tour'; this.loading = false; },
    });
  }

  cancel(booking: any) {
    if (!confirm(`Hủy booking ${booking.bookingCode}?`)) return;
    this.api.cancelBooking(booking.id).subscribe({
      next: () => this.load(),
      error: err => alert(err.error?.error || 'Không thể hủy booking'),
    });
  }

  statusLabel(status: string) {
    return ({ pending: 'Chờ xác nhận', confirmed: 'Đã xác nhận', cancelled: 'Đã hủy' } as any)[status] || status;
  }
}
