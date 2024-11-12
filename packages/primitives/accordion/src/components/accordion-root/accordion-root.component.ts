import { Component, contentChildren } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgxPrimerAccordionItemComponent } from '../accordion-item/accordion-item.component';
import { NgxPrimerSlotComponent } from '@ngx-primer/primitive/slot';

@Component({
  selector: 'ngx-primer-accordion-root',
  standalone: true,
  imports: [
    CommonModule,
    NgxPrimerSlotComponent
  ],
  templateUrl: './accordion-root.component.html',
  styleUrl: './accordion-root.component.scss',
})
export class NgxPrimerAccordionRootComponent {
  public readonly accordionItems = contentChildren('accordionItems', {
    descendants: true
  });
}
