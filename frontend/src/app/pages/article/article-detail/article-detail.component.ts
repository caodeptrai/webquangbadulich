import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  article: any = null;
  constructor(private api: ApiService, private route: ActivatedRoute) {}
  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug') || '';
    this.api.getArticle(slug).subscribe(data => { this.article = data; });
  }
  getTags(): string[] { return this.article?.tags?.split(',').map((t: string) => t.trim()) || []; }
}
