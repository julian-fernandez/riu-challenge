import { Component } from '@angular/core';
import { ImageCarouselCardComponent } from '../image-carousel-card/image-carousel-card.component';

@Component({
  selector: 'app-image-carousel-section',
  standalone: true,
  imports: [ImageCarouselCardComponent],
  templateUrl: './image-carousel-section.component.html',
  styleUrl: './image-carousel-section.component.scss'
})
export class ImageCarouselSectionComponent {

}
