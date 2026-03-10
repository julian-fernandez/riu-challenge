import { Component } from '@angular/core';
import { FeaturedCardComponent } from './components/featured-card/featured-card.component';
import { ArticleGridSectionComponent } from './components/article-grid-section/article-grid-section.component';
import { ImageCarouselSectionComponent } from './components/image-carousel-section/image-carousel-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FeaturedCardComponent, ArticleGridSectionComponent, ImageCarouselSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
