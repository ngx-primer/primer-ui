import { Component, input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgxPrimerAccordionItemComponent } from '../accordion-item/accordion-item.component';

@Component({
  selector: 'ngx-primer-accordion-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion-content.component.html',
  styleUrl: './accordion-content.component.scss',
})
export class NgxPrimerAccordionContentComponent<T> {
  public readonly accordionItem = input.required<NgxPrimerAccordionItemComponent<T>>({
    alias: 'ngxPrimerAccordionItemInstanceRef',
  });
}
