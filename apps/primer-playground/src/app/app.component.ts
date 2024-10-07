import { Component } from '@angular/core';
import { NgxPrimerAccordionRootComponent } from '@ngx-primer-accordion';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, NgxPrimerAccordionRootComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'primer-playground';
}
