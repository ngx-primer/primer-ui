import { AccordionOrientationOption, AccordionTypeOption } from '../config/accordion-root.config';
import { Component, booleanAttribute, input, model } from '@angular/core';

import { AccordionRoot } from '../core/accordion-root';
import { provideAccordionRootComponent } from '../provider/accordion-root-component.provider';
@Component({
  selector: 'ngx-primer-accordion-root',
  standalone: true,
  templateUrl: './ngx-accordion-root.component.html',
  styleUrl: './ngx-accordion-root.component.scss',
  providers: [
    provideAccordionRootComponent()
  ]
})
export class NgxPrimerAccordionRootComponent<T> extends AccordionRoot<T> {
  /**
   * The accordion type
   */
  public override readonly type = input<AccordionTypeOption>(this.config.type,  {
    alias: 'ngxPrimerAccordionType',
  });

  /**
   * The collapsible represnet whic accordion can be collapsed or expanded.
   */
  public override readonly collapsible = input<boolean, unknown>(this.config.collapsible,  {
    alias: 'ngxPrimerAccordionCollapsible',
    transform: booleanAttribute,
  });

  /**
   * Determine that accordion is disabled.
   */
  public override readonly disabled = input<boolean, unknown>(this.config.disabled, {
    alias: 'ngxPrimerAccordionDisabled',
    transform: booleanAttribute,
  });

  /**
   * The accordion orientation config.
   */
  public override readonly orientation = input<AccordionOrientationOption>(this.config.orientation, {
    alias: 'ngxPrimerAccordionOrientation',
  });

  /**
   * The accordion instance value.
   */
  public override readonly value = model<T | T[] | null>(null, {
    alias: 'ngxPrimerAccordionValue'
  });
}
