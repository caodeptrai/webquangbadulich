import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './article-form.component.html'
})
export class ArticleFormComponent implements OnInit {
  isEdit = false;
  form: any = { isFeatured: false, isPublished: true };
  categories: any[] = [];
  loading = false;
  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.api.getArticleCategories().subscribe(d => { this.categories = d; });
    const id = this.route.snapshot.paramMap.get('id');
    if (id) { this.isEdit = true; this.api.getArticle(id).subscribe(d => { this.form = { ...d }; }); }
  }
  save() {
    this.loading = true;
    const action = this.isEdit ? this.api.updateArticle(this.form.id, this.form) : this.api.createArticle(this.form);
    action.subscribe({ next: () => this.router.navigate(['/admin/articles']), error: () => { this.loading = false; } });
  }
}
