import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  loading = true;
  search = '';
  constructor(private api: ApiService) {}
  ngOnInit() { this.api.getUsers().subscribe((data: any) => { this.users = data.data; this.loading = false; }, () => { this.loading = false; }); }
  filteredUsers() {
    if (!this.search) return this.users;
    const q = this.search.toLowerCase();
    return this.users.filter(u => u.fullName.toLowerCase().includes(q) || u.email.toLowerCase().includes(q));
  }
  toggle(id: string) { this.api.toggleUserActive(id).subscribe(() => this.ngOnInit()); }
}
