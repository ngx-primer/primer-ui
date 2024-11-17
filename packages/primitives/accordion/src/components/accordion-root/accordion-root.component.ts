import { AfterContentInit, Component, contentChild, contentChildren, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgxPrimerAccordionItemComponent } from '../accordion-item/accordion-item.component';
import { NgxPrimerAccordionRootThemeVariantDirective } from '../../directives';

@Component({
  selector: 'ngx-primer-accordion-root',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './accordion-root.component.html',
  styleUrl: './accordion-root.component.scss',
  exportAs: 'ngxPrimerAccordionRootComponent'
})
export class NgxPrimerAccordionRootComponent {
  /**
   * The accordion items intances.
   */
  public readonly accordionItems = contentChildren(NgxPrimerAccordionItemComponent, {
    descendants: true,
    read: NgxPrimerAccordionItemComponent
  });

  /**
   * The accoridon root varian directive instances.
   */
  public readonly accordionRootThemeVariant = inject(NgxPrimerAccordionRootThemeVariantDirective, {
    self: true,
    optional: true,
    host: true,
  });
}
