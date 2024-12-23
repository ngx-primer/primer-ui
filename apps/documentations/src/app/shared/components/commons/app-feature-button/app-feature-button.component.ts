/* eslint-disable @angular-eslint/no-input-rename */
import { Component, input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feature-button',
  imports: [CommonModule, RouterLink],
  templateUrl: './app-feature-button.component.html',
  styleUrl: './app-feature-button.component.scss',
  standalone: true
})
export class AppFeatureButtonComponent {
  public text = input('', {
    alias: 'text'
  });

  public hyperlink = input(false, {
    alias: 'hyperlink'
  });

  public hyperlinkTarget = input('#', {
    alias: 'target'
  })

  public get buttonText(): string {
    return this.text();
  }

  public isActive = false;
}
