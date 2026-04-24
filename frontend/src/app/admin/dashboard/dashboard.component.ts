import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stats: any = null;
  recentInquiries: any[] = [];
  topDestinations: any[] = [];
  constructor(private api: ApiService) {}
  ngOnInit() {
    this.api.getDashboard().subscribe(data => {
      this.stats = data.stats;
      this.recentInquiries = data.recentInquiries;
      this.topDestinations = data.topDestinations;
    });
  }
}
