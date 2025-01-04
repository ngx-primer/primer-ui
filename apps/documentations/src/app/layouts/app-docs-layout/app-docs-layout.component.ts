import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-docs-layout',
  imports: [CommonModule, RouterModule],
  templateUrl: './app-docs-layout.component.html',
  styleUrl: './app-docs-layout.component.scss',
})
export class AppDocsLayoutComponent {
}
