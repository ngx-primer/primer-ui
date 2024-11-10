import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgxPrimerAccordionRootComponent } from '@ngx-primer/accordion/accordion-root';

@Component({
  selector: 'ngx-primer-accordion-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngx-primer-accordion-item.component.html',
  styleUrl: './ngx-primer-accordion-item.component.scss',
})
export class NgxPrimerAccordionItemComponent {
  public readonly accordionRootInstance = inject(NgxPrimerAccordionRootComponent, {
    host: true,
    optional: true,
  });
}
