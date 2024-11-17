import { NgxPrimerAccordionContentComponent, NgxPrimerAccordionItemComponent, NgxPrimerAccordionRootComponent, NgxPrimerAccordionRootThemeVariantDirective, NgxPrimerAccordionTriggerComponent } from '@ngx-primer/primitive/accordion';

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    RouterModule, 
    NgxPrimerAccordionRootComponent, 
    NgxPrimerAccordionItemComponent, 
    NgxPrimerAccordionContentComponent, 
    NgxPrimerAccordionTriggerComponent,
    NgxPrimerAccordionRootThemeVariantDirective
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'documentations';
}
