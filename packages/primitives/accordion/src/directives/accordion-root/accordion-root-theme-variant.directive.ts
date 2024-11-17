import { AccordionRootThemeVariant, accordionRootThemeVariant } from '../../themes';
import { Directive, HostBinding, model } from '@angular/core';

import { injectAccordionConfig } from '../../configs/accordion-config';

interface AccordionRootProps extends HTMLElement, AccordionRootThemeVariant {
}
@Directive({
  selector: '[ngxAccordionRootThemeVariant]',
  standalone: true,
  exportAs: 'ngxAccordionRootThemeVariant',
})
export class NgxPrimerAccordionRootThemeVariantDirective {
  public readonly variant = model<AccordionRootProps["variant"]>("light");
  public readonly size = model<AccordionRootProps["size"]>("md");
  public readonly borderRadius = model<AccordionRootProps["borderRadius"]>("md");

  protected readonly accordionConfig = injectAccordionConfig();

  @HostBinding("class")
  public get classLists() {
    return this.accordionConfig.theme.builtIn ? 
      accordionRootThemeVariant({
        size: this.size(),
        variant: this.variant(),
        borderRadius: this.borderRadius()
      }) : {}
  }
}
