import { AccordionConfigInterface, defaulAccordionConfig, defineAccordionConfig } from "../config/accordion-root.config";
import { Provider, inject } from "@angular/core";

import { AccordionRootContextInjectionToken } from "../context/accordion-root.context";

/**
 * Provide the default Accordion configuration
 * @param config The Accordion configuration
 * @returns The provider
 */
function provideAccordionConfig(config: Partial<AccordionConfigInterface>): Provider[] {
  const defaultConfig = defineAccordionConfig(defaulAccordionConfig);
  
  return [
    {
      provide: AccordionRootContextInjectionToken,
      useValue: { ...defaultConfig, ...config },
    },
  ];
}

/**
 * Inject the Accordion configuration
 * @returns The global Accordion configuration
 */
function injectAccordionConfig(): AccordionConfigInterface {
  return inject(AccordionRootContextInjectionToken, { optional: true }) ?? defineAccordionConfig(defaulAccordionConfig);
}

/**
 * Expose configs though angular dependency system.
 * 
 * @returns 
 */
export const useAccordionRootContext = () => ({
  provideAccordionConfig,
  injectAccordionConfig
})