import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';
  loading = false;

  constructor(private api: ApiService, private auth: AuthService, private router: Router) {}

  onSubmit() {
    if (!this.email || !this.password) return;
    this.loading = true;
    this.error = '';
    this.api.login({ email: this.email, password: this.password }).subscribe({
      next: (res) => {
        this.auth.login(res.token, res.user);
        this.loading = false;
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.error = err.error?.error || 'Đăng nhập thất bại';
        this.loading = false;
      }
    });
  }
}
