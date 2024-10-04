import { InjectionToken } from "@angular/core";
import { SlotConfigInterface } from "../config/slot.config";

/**
 * Accordion Injection Token.
 */
export const SlotContextInjectionToken = new InjectionToken<SlotConfigInterface>(
  'SlotContextInjectionToken',
);