import { Component } from '@angular/core';
import { ArticleCardComponent } from '../article-card/article-card.component';

@Component({
  selector: 'app-article-grid-section',
  standalone: true,
  imports: [ArticleCardComponent],
  templateUrl: './article-grid-section.component.html',
  styleUrl: './article-grid-section.component.scss'
})

/**
 * I believe this should own its own grid layout so I'm choosing not to extract the grid out
 * into its own component, as it's mostly just a styleful wrapper around the grid layout.
 */
export class ArticleGridSectionComponent {

}
