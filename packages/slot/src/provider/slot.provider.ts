import { Provider, inject } from "@angular/core";
import { SlotConfigInterface, defaulSlotConfig, defineSlotConfig } from "../config/slot.config";

import { SlotContextInjectionToken } from "../context/slot.context";
/**
 * Provide the default slot configuration
 * @param config The slot configuration
 * @returns The provider
 */
function provideSlotConfig(config: Partial<SlotConfigInterface>): Provider[] {
  const defaultConfig = defineSlotConfig(defaulSlotConfig);
  
  return [
    {
      provide: SlotContextInjectionToken,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      useValue: { ...defaultConfig, ...config },
    },
  ];
}

/**
 * Inject the slot configuration
 * @returns The global slot configuration
 */
function injectSlotConfig(): SlotConfigInterface {
  return inject(SlotContextInjectionToken, { optional: true }) ?? defineSlotConfig(defaulSlotConfig);
}

/**
 * Expose configs though angular dependency system.
 * 
 * @returns 
 */
export const useSlotContext = () => ({
  provideSlotConfig,
  injectSlotConfig
})