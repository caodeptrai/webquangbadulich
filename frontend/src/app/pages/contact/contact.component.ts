import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form: any = { type: 'contact' };
  error = '';
  success = false;
  loading = false;

  constructor(private api: ApiService, public auth: AuthService) {
    if (this.auth.isLoggedIn()) {
      this.form.name = this.auth.user()?.fullName;
      this.form.email = this.auth.user()?.email;
    }
  }

  submit() {
    if (!this.form.name || !this.form.email || !this.form.subject || !this.form.message) {
      this.error = 'Vui lòng điền đầy đủ thông tin bắt buộc';
      return;
    }
    this.loading = true;
    this.error = '';
    this.api.createInquiry(this.form).subscribe({
      next: () => { this.success = true; this.loading = false; this.form = { type: 'contact' }; },
      error: (err) => { this.error = err.error?.error || 'Gửi thất bại'; this.loading = false; }
    });
  }
}
