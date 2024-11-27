import {
  AccordionRootThemeVariant,
  accordionRootThemeVariant,
} from '../../themes';
import { Directive, HostBinding, model } from '@angular/core';

import { injectAccordionConfig } from '../../configs/accordion-config';

interface AccordionRootProps extends HTMLElement, AccordionRootThemeVariant {}
@Directive({
  selector: '[ngxPrimerAccordionRootThemeVariant]',
  standalone: true,
  exportAs: 'ngxPrimerAccordionRootThemeVariant',
})
export class NgxPrimerAccordionRootThemeVariantDirective {
  /**
   * The accordion root variant.
   */
  public readonly variant = model<AccordionRootProps['variant']>('light', {
    alias: 'ngxPrimerAccordionRootVariant',
  });

  /**
   * The accordion root size.
   */
  public readonly size = model<AccordionRootProps['size']>('md', {
    alias: 'ngxPrimerAccordionRootSize',
  });

  /**
   * The accordion root border radius.
   */
  public readonly borderRadius = model<AccordionRootProps['borderRadius']>(
    'md',
    {
      alias: 'ngxPrimerAcordionRootBorderRadius',
    }
  );

  /**
   * The accordion config instance.
   */
  protected readonly accordionConfig = injectAccordionConfig();

  /**
   * Check wether the built in theme variants was enabled.
   */
  protected get isEnableBuiltinThemeVariant() {
    return this.accordionConfig.theme.builtIn;
  }

  /**
   * Resolve built in theme variant.
   */
  protected get useBuiltinThemeVariant() {
    return accordionRootThemeVariant({
      size: this.size(),
      variant: this.variant(),
      borderRadius: this.borderRadius(),
    });
  }

  /**
   * Bind class attributes to the current accordion root instance.
   */
  @HostBinding('class')
  public get classLists() {
    return this.isEnableBuiltinThemeVariant ? this.useBuiltinThemeVariant : {};
  }
}
