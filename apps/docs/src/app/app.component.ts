import { NgxPrimerAccordionItemComponent, NgxPrimerAccordionRootComponent } from '@ngx-primer/primitives/accordion';

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    NgxPrimerAccordionItemComponent,
    NgxPrimerAccordionRootComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
