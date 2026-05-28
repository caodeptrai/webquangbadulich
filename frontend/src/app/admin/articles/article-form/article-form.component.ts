import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('editorContent') editorContent!: ElementRef;
  
  isEdit = false;
  form: any = { isFeatured: false, isPublished: true };
  categories: any[] = [];
  loading = false;
  uploading = false;
  
  // Image management
  images: { url: string; caption: string; file?: File; preview?: string }[] = [];
  
  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) {}
  
  ngOnInit() {
    this.api.getArticleCategories().subscribe(d => { this.categories = d; });
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.api.getArticle(id).subscribe(d => {
        this.form = { ...d };
        // Load existing images
        if (d.images && d.images.length > 0) {
          this.images = d.images.map((img: any) => ({
            url: img.url,
            caption: img.caption || '',
            isPrimary: img.isPrimary
          }));
        }
        // Set editor content after view loads
        setTimeout(() => {
          if (this.editorContent && d.content) {
            this.editorContent.nativeElement.innerHTML = d.content;
          }
        }, 100);
      });
    }
  }
  
  execCmd(command: string) {
    document.execCommand(command, false);
    this.editorContent.nativeElement.focus();
  }
  
  formatBlock(event: Event) {
    const select = event.target as HTMLSelectElement;
    const value = select.value;
    if (value) {
      document.execCommand('formatBlock', false, value);
      select.value = ''; // Reset select
    }
    this.editorContent.nativeElement.focus();
  }
  
  insertLink() {
    const url = prompt('Nhập URL:');
    if (url) {
      document.execCommand('createLink', false, url);
    }
    this.editorContent.nativeElement.focus();
  }
  
  insertImage() {
    const url = prompt('Nhập URL hình ảnh:');
    if (url) {
      document.execCommand('insertImage', false, url);
    }
    this.editorContent.nativeElement.focus();
  }
  
  onContentChange() {
    this.form.content = this.editorContent.nativeElement.innerHTML;
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
    
    try {
      // Get content from editor
      this.form.content = this.editorContent.nativeElement.innerHTML;
      
      // Upload new images and prepare data
      const uploadedImages = await this.uploadImages();
      
      const articleData = {
        ...this.form,
        images: uploadedImages
      };
      
      const action = this.isEdit 
        ? this.api.updateArticle(this.form.id, articleData)
        : this.api.createArticle(articleData);
      
      action.subscribe({
        next: () => this.router.navigate(['/admin/articles']),
        error: () => { this.loading = false; }
      });
    } catch (error) {
      console.error('Save failed:', error);
      this.loading = false;
    }
  }
}
