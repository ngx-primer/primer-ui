import { Component, TemplateRef, contentChild, input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SlotContextDirective } from '../../directives';

@Component({
  selector: 'ngx-primer-slot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slot.component.html',
})
export class NgxPrimerSlotComponent<T extends object> {
  public readonly context = input({} as T, {
    alias: 'ngxSlotContext'
  });

  public readonly templateRef = contentChild(SlotContextDirective, {
    read: TemplateRef
  })
}
