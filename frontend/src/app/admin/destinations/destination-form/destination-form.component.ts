import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-destination-form',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './destination-form.component.html'
})
export class DestinationFormComponent implements OnInit {
  isEdit = false;
  form: any = { isFeatured: false, isActive: true };
  provinces: any[] = [];
  categories: any[] = [];
  primaryImageUrl = '';
  loading = false;
  error = '';

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.api.getProvinces().subscribe(d => { this.provinces = d; });
    this.api.getDestinationCategories().subscribe(d => { this.categories = d; });
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.api.getDestination(id).subscribe(d => {
        this.form = { ...d };
        this.primaryImageUrl = d.images?.[0]?.url || '';
      });
    }
  }

  save() {
    this.loading = true;
    this.error = '';
    const data: any = { ...this.form };
    if (this.primaryImageUrl) {
      data.images = [{ url: this.primaryImageUrl, isPrimary: true, sortOrder: 0 }];
    }
    const action = this.isEdit
      ? this.api.updateDestination(this.form.id, data)
      : this.api.createDestination(data);
    action.subscribe({
      next: () => { this.router.navigate(['/admin/destinations']); },
      error: (err) => { this.error = err.error?.error || 'Lưu thất bại'; this.loading = false; }
    });
  }
}
