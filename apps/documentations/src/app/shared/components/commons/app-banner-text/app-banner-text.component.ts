import { Component, input } from '@angular/core';

@Component({
  selector: 'app-banner-text',
  imports: [],
  templateUrl: './app-banner-text.component.html',
  styleUrl: './app-banner-text.component.scss',
  standalone: true,
})
export class AppBannerTextComponent {
  brand = input('');
  tagline = input('');
  subtle = input('');
}
