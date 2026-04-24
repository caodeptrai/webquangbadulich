import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  fullName = '';
  email = '';
  phone = '';
  password = '';
  confirmPassword = '';
  error = '';
  loading = false;

  constructor(private api: ApiService, private auth: AuthService, private router: Router) {}

  onSubmit() {
    if (!this.fullName || !this.email || !this.password) return;
    if (this.password !== this.confirmPassword) { this.error = 'Mật khẩu không khớp'; return; }
    if (this.password.length < 6) { this.error = 'Mật khẩu phải có ít nhất 6 ký tự'; return; }
    this.loading = true;
    this.error = '';
    this.api.register({ fullName: this.fullName, email: this.email, phone: this.phone, password: this.password }).subscribe({
      next: (res) => {
        this.auth.login(res.token, res.user);
        this.loading = false;
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.error = err.error?.error || 'Đăng ký thất bại';
        this.loading = false;
      }
    });
  }
}
