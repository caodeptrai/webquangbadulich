import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  scrolled = false;
  mobileMenuOpen = false;
  dropdownOpen = false;

  constructor(public auth: AuthService) {}

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.scrolled = window.scrollY > 10;
    });
    window.addEventListener('click', (e) => {
      if (!(e.target as Element).closest('.user-dropdown')) {
        this.dropdownOpen = false;
      }
    });
  }
}
