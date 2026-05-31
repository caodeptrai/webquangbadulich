import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';

type CategoryType = 'destinations' | 'articles';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  destCategories: any[] = [];
  artCategories: any[] = [];
  newDestCat = '';
  newArtCat = '';
  isSaving = false;
  deletingId: string | null = null;
  errorMessage = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.api.getDestinationCategories().subscribe(d => { this.destCategories = d; });
    this.api.getArticleCategories().subscribe(d => { this.artCategories = d; });
  }

  add(type: CategoryType) {
    const name = (type === 'destinations' ? this.newDestCat : this.newArtCat).trim();
    if (!name || this.isSaving) return;

    this.errorMessage = '';
    this.isSaving = true;
    const slug = this.toSlug(name);
    const request = type === 'destinations'
      ? this.api.createDestinationCategory({ name, slug })
      : this.api.createArticleCategory({ name, slug });

    request.subscribe({
      next: () => {
        if (type === 'destinations') {
          this.newDestCat = '';
        } else {
          this.newArtCat = '';
        }
        this.loadCategories();
      },
      error: err => {
        this.errorMessage = err?.error?.error || 'Không thể thêm danh mục. Vui lòng thử lại.';
        this.isSaving = false;
      },
      complete: () => {
        this.isSaving = false;
      }
    });
  }

  delete(type: CategoryType, id: string) {
    if (this.deletingId) return;

    const category = type === 'destinations'
      ? this.destCategories.find(c => c.id === id)
      : this.artCategories.find(c => c.id === id);
    const count = type === 'destinations'
      ? category?._count?.destinations || 0
      : category?._count?.articles || 0;

    if (count > 0) {
      this.errorMessage = 'Không thể xoá danh mục đang có nội dung. Vui lòng chuyển hoặc xoá nội dung thuộc danh mục này trước.';
      return;
    }

    if (!window.confirm('Bạn có chắc muốn xoá danh mục này?')) return;

    this.errorMessage = '';
    this.deletingId = id;
    const request = type === 'destinations'
      ? this.api.deleteDestinationCategory(id)
      : this.api.deleteArticleCategory(id);

    request.subscribe({
      next: () => {
        if (type === 'destinations') {
          this.destCategories = this.destCategories.filter(c => c.id !== id);
        } else {
          this.artCategories = this.artCategories.filter(c => c.id !== id);
        }
      },
      error: err => {
        this.errorMessage = err?.error?.error || 'Không thể xoá danh mục. Vui lòng thử lại.';
        this.deletingId = null;
      },
      complete: () => {
        this.deletingId = null;
      }
    });
  }

  private toSlug(value: string) {
    return value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D')
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
}
