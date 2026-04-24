import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-tour-form',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './tour-form.component.html'
})
export class TourFormComponent implements OnInit {
  isEdit = false;
  form: any = { isFeatured: false, isActive: true };
  loading = false;
  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) { this.isEdit = true; this.api.getTour(id).subscribe(d => { this.form = { ...d }; }); }
  }
  save() {
    this.loading = true;
    const action = this.isEdit ? this.api.updateTour(this.form.id, this.form) : this.api.createTour(this.form);
    action.subscribe({ next: () => this.router.navigate(['/admin/tours']), error: () => { this.loading = false; } });
  }
}
