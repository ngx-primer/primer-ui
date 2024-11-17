import { AccordionRootThemeVariant, accordionRootThemeVariant } from '../../themes';
import { Directive, HostBinding, input } from '@angular/core';

interface AccordionRootProps extends HTMLElement, AccordionRootThemeVariant {
}
@Directive({
  selector: '[ngxAccordionRootThemeVariant]',
  standalone: true,
  exportAs: 'ngxAccordionRootThemeVariant',
})
export class NgxPrimerAccordionRootThemeVariantDirective {
  public readonly variant = input<AccordionRootProps["variant"]>("light");
  public readonly size = input<AccordionRootProps["size"]>("md");
  public readonly borderRadius = input<AccordionRootProps["borderRadius"]>("md")

  @HostBinding("class")
  public get classLists() {
    return accordionRootThemeVariant({
      size: this.size(),
      variant: this.variant(),
      borderRadius: this.borderRadius()
    })
  }
}
