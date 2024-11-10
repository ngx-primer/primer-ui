import { AccordionConfigInterface } from "../config/accordion-root.config";
import { InjectionToken } from "@angular/core";

/**
 * Accordion Root Context Injection Token.
 */
export const AccordionRootContextInjectionToken = new InjectionToken<AccordionConfigInterface>(
  'AccordionRootContextInjectionToken',
);
