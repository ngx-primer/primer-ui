import { AccordionItemConfigInterface } from "../config/accordion-item.config";
import { InjectionToken } from "@angular/core";

/**
 * Accordion Root Context Injection Token.
 */
export const AccordionItemContextInjectionToken = new InjectionToken<AccordionItemConfigInterface>(
  'AccordionItemContextInjectionToken',
);
