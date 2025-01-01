import { InjectionToken } from '@angular/core';
import { NgxPrimerAccordionConfig } from '../configs/accordion-config';

/**
 * Accordion configuration injection token.
 */
export const NgxPrimerAccordionConfigToken =
  new InjectionToken<NgxPrimerAccordionConfig>('NgxPrimerAccordionConfigToken');
