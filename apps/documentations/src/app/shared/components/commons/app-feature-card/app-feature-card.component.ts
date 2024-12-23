import { Component, input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  imports: [],
  templateUrl: './app-feature-card.component.html',
  styleUrl: './app-feature-card.component.scss'
})
export class AppFeatureCardComponent {
  item = input<{ title: string, description: string }>();
}
