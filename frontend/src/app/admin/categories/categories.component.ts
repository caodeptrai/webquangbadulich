import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';

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
  constructor(private api: ApiService) {}
  ngOnInit() {
    this.api.getDestinationCategories().subscribe(d => { this.destCategories = d; });
    this.api.getArticleCategories().subscribe(d => { this.artCategories = d; });
  }
  add(type: string) {
    const name = type === 'destinations' ? this.newDestCat : this.newArtCat;
    if (!name.trim()) return;
    const slug = name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '');
    fetch('http://localhost:3000/api/categories/' + type, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + localStorage.getItem('auth_token') },
      body: JSON.stringify({ name, slug })
    }).then(() => location.reload());
  }
  delete() {}
}
