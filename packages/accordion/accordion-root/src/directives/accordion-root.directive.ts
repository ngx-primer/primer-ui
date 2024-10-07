import { AccordionTypeOption, AccordionOrientationOption } from "../config";
import { AccordionRoot } from "../core";
import { booleanAttribute, Directive, HostBinding, input, model } from "@angular/core";

@Directive({
  selector: '[ngxPrimerAccordionRootDirective]',
  exportAs: 'ngxPrimerAccordionRootDirective',
})
export class AccordionRootDirective<T> extends AccordionRoot<T> {
  /**
   * The accordion type
   */
  @HostBinding('attr.data-type')
  public override readonly type = input<AccordionTypeOption>(this.config.type,  {
    alias: 'ngxPrimerAccordionTypeDirective',
  });

  /**
   * The collapsible represnet whic accordion can be collapsed or expanded.
   */
  @HostBinding('attr.data-collapsible')
  public override readonly collapsible = input<boolean, unknown>(this.config.collapsible,  {
    alias: 'ngxPrimerAccordionCollapsibleDirective',
    transform: booleanAttribute,
  });

  /**
   * Determine that accordion is disabled.
   */
  @HostBinding('attr.data-disabled')
  public override readonly disabled = input<boolean, unknown>(this.config.disabled, {
    alias: 'ngxPrimerAccordionCollapsibleDirective',
    transform: booleanAttribute,
  });

  /**
   * The accordion orientation config.
   */
  @HostBinding('attr.data-orientation')
  public override readonly orientation = input<AccordionOrientationOption>(this.config.orientation, {
    alias: 'ngxPrimerAccordionOrientationDirective',
  });

  /**
   * The accordion instance value.
   */
  public override readonly value = model<T | T[] | null>(null, {
    alias: 'ngxPrimerAccordionValueDirective'
  });
}