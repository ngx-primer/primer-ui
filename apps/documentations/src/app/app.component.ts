import { NgxPrimerAccordionContentComponent, NgxPrimerAccordionItemComponent, NgxPrimerAccordionRootComponent, NgxPrimerAccordionTriggerComponent } from '@ngx-primer/primitive/accordion';

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    RouterModule, 
    NgxPrimerAccordionRootComponent, 
    NgxPrimerAccordionItemComponent, 
    NgxPrimerAccordionContentComponent, 
    NgxPrimerAccordionTriggerComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'documentations';
}
