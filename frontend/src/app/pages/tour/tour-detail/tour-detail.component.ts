import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-tour-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.css']
})
export class TourDetailComponent implements OnInit {
  tour: any = null;
  submitting = false;
  bookingSuccess = '';
  bookingError = '';
  minDate = new Date().toISOString().split('T')[0];
  bookingForm: any = {
    startDate: '',
    peopleCount: 1,
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    note: '',
  };

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    public auth: AuthService,
  ) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug') || this.route.snapshot.paramMap.get('id') || '';
    this.api.getTour(slug).subscribe(data => { this.tour = data; });
    this.prefillContact();
  }

  getIncludes(): string[] { try { return JSON.parse(this.tour?.includes || '[]'); } catch { return []; } }

  get unitPrice(): number {
    return this.tour ? (this.tour.discountPrice || this.tour.price || 0) : 0;
  }

  get totalAmount(): number {
    return this.unitPrice * (Number(this.bookingForm.peopleCount) || 0);
  }

  private prefillContact() {
    const user = this.auth.user();
    if (!user) return;
    this.bookingForm.contactName = user.fullName || '';
    this.bookingForm.contactEmail = user.email || '';
    this.bookingForm.contactPhone = user.phone || '';
  }

  submitBooking() {
    this.bookingSuccess = '';
    this.bookingError = '';

    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/auth/login'], { queryParams: { returnUrl: this.router.url } });
      return;
    }

    if (!this.tour) return;

    if (!this.bookingForm.startDate) {
      this.bookingError = 'Vui lòng chọn ngày khởi hành';
      return;
    }

    if (this.bookingForm.startDate < this.minDate) {
      this.bookingError = 'Ngày khởi hành phải lớn hơn hoặc bằng ngày hiện tại';
      return;
    }

    if (!this.bookingForm.peopleCount || this.bookingForm.peopleCount < 1) {
      this.bookingError = 'Số người phải lớn hơn 0';
      return;
    }

    if (this.bookingForm.peopleCount > this.tour.maxPeople) {
      this.bookingError = 'Số chỗ không đủ, vui lòng chọn số lượng ít hơn';
      return;
    }

    this.submitting = true;
    this.api.createBooking({ ...this.bookingForm, tourId: this.tour.id }).subscribe({
      next: (res) => {
        this.submitting = false;
        this.bookingSuccess = `${res.message || 'Đặt tour thành công'}! Mã booking: ${res.booking?.bookingCode || ''}`;
        this.bookingForm.startDate = '';
        this.bookingForm.peopleCount = 1;
        this.bookingForm.note = '';
      },
      error: (err) => {
        this.submitting = false;
        this.bookingError = err.error?.error || err.error?.errors?.[0]?.msg || 'Không thể đặt tour, vui lòng thử lại';
      },
    });
  }
}
