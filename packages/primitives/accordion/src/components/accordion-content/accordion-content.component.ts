import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxPrimerSlotComponent } from '@ngx-primer/primitive/slot';

@Component({
  selector: 'ngx-primer-accordion-content',
  standalone: true,
  imports: [CommonModule, NgxPrimerSlotComponent],
  templateUrl: './accordion-content.component.html',
  styleUrl: './accordion-content.component.scss',
})
export class NgxPrimerAccordionContentComponent {}
