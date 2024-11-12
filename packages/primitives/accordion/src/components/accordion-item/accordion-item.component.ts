import { Component, contentChild } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgxPrimerAccordionContentComponent } from '../accordion-content/accordion-content.component';
import { NgxPrimerAccordionTriggerComponent } from '../accordion-trigger/accordion-trigger.component';
import { NgxPrimerSlotComponent } from '@ngx-primer/primitive/slot';

@Component({
  selector: 'ngx-primer-accordion-item',
  standalone: true,
  imports: [CommonModule, NgxPrimerSlotComponent],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.scss',
})
export class NgxPrimerAccordionItemComponent {
  public readonly accordionContent = contentChild('accordionContent', {
    descendants: true,
    read: NgxPrimerAccordionContentComponent
  });
  public readonly accordionTrigger = contentChild('accordionTrigger', {
    descendants: true,
    read: NgxPrimerAccordionTriggerComponent
  });
}
