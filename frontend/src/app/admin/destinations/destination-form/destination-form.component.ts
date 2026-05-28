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
  loading = false;
  uploading = false;
  error = '';

  images: { url: string; caption: string; file?: File; preview?: string }[] = [];

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.api.getProvinces().subscribe(d => { this.provinces = d; });
    this.api.getDestinationCategories().subscribe(d => { this.categories = d; });
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.api.getDestination(id).subscribe(d => {
        this.form = { ...d };
        if (d.images && d.images.length > 0) {
          this.images = d.images.map((img: any) => ({
            url: img.url,
            caption: img.caption || '',
          }));
        }
      });
    }
  }

  onFileSelect(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            this.images.push({
              url: '',
              caption: '',
              file: file,
              preview: e.target.result
            });
          };
          reader.readAsDataURL(file);
        }
      }
    }
    event.target.value = '';
  }

  removeImage(index: number) {
    this.images.splice(index, 1);
  }

  setPrimary(index: number) {
    const image = this.images.splice(index, 1)[0];
    this.images.unshift(image);
  }

  async uploadImages(): Promise<{ url: string; caption: string }[]> {
    const uploadedImages: { url: string; caption: string }[] = [];

    for (let i = 0; i < this.images.length; i++) {
      const img = this.images[i];
      if (img.file) {
        this.uploading = true;
        try {
          const result = await this.api.uploadImage(img.file).toPromise();
          uploadedImages.push({
            url: result.url,
            caption: img.caption
          });
        } catch (error) {
          console.error('Upload failed:', error);
          if (img.preview) {
            uploadedImages.push({
              url: img.preview,
              caption: img.caption
            });
          }
        }
        this.uploading = false;
      } else {
        uploadedImages.push({
          url: img.url,
          caption: img.caption
        });
      }
    }

    return uploadedImages;
  }

  async save() {
    this.loading = true;
    this.error = '';

    try {
      const uploadedImages = await this.uploadImages();

      const data: any = { ...this.form };
      if (uploadedImages.length > 0) {
        data.images = uploadedImages;
      }

      const action = this.isEdit
        ? this.api.updateDestination(this.form.id, data)
        : this.api.createDestination(data);
      action.subscribe({
        next: () => { this.router.navigate(['/admin/destinations']); },
        error: (err) => { this.error = err.error?.error || 'Lưu thất bại'; this.loading = false; }
      });
    } catch (error) {
      console.error('Save failed:', error);
      this.error = 'Lưu thất bại';
      this.loading = false;
    }
  }
}
