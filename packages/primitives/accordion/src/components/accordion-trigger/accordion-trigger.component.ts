import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxPrimerSlotComponent } from '@ngx-primer/primitive/slot';

@Component({
  selector: 'ngx-primer-accordion-trigger',
  standalone: true,
  imports: [CommonModule, NgxPrimerSlotComponent],
  templateUrl: './accordion-trigger.component.html',
  styleUrl: './accordion-trigger.component.scss',
})
export class NgxPrimerAccordionTriggerComponent {}
