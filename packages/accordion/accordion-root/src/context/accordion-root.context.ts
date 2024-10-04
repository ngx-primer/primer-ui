import { AccordionConfigInterface } from "../config/accordion-root.config";
import { InjectionToken } from "@angular/core";

/**
 * Accordion Injection Token.
 */
export const AccordionRootContextInjectionToken = new InjectionToken<AccordionConfigInterface>(
  'AccordionRootContextInjectionToken',
);