import { AccordionOrientationOption, AccordionTypeOption } from '../config/accordion-root.config';
import { Component, HostBinding, booleanAttribute, input, model } from '@angular/core';

import { AccordionRoot } from '../core/accordion-root';
@Component({
  selector: 'ngx-primer-accordion-root',
  standalone: true,
  templateUrl: './ngx-accordion-root.component.html',
  styleUrl: './ngx-accordion-root.component.scss',
})
export class NgxPrimerAccordionRootComponent<T> extends AccordionRoot<T> {
  /**
   * The accordion type
   */
  @HostBinding('attr.data-type')
  public override readonly type = input<AccordionTypeOption>(this.config.type,  {
    alias: 'ngxPrimerAccordionType',
  });

  /**
   * The collapsible represnet whic accordion can be collapsed or expanded.
   */
  @HostBinding('attr.data-collapsible')
  public override readonly collapsible = input<boolean, unknown>(this.config.collapsible,  {
    alias: 'ngxPrimerAccordionCollapsible',
    transform: booleanAttribute,
  });

  /**
   * Determine that accordion is disabled.
   */
  @HostBinding('attr.data-disabled')
  public override readonly disabled = input<boolean, unknown>(this.config.disabled, {
    alias: 'ngxPrimerAccordionDisabled',
    transform: booleanAttribute,
  });

  /**
   * The accordion orientation config.
   */
  @HostBinding('attr.data-orientation')
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
