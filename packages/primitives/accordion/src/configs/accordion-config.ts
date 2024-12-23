import { Provider, inject } from '@angular/core';

import { NgxPrimerAccordionConfigToken } from '../tokens/accordion-config.token';

export enum NgxPrimerAccordionType {
  Single = 'Single',
  Multiple = 'Multiple',
}
export enum NgxPrimerAccordionOrientation {
  Vertical = 'Vertical',
  Horizontal = 'Horizontal',
}
export interface NgxPrimerAccordionConfig {
  type: NgxPrimerAccordionType | keyof typeof NgxPrimerAccordionType;
  collapsible: boolean;
  orientation:
    | NgxPrimerAccordionOrientation
    | keyof typeof NgxPrimerAccordionOrientation;
  theme: {
    builtIn: boolean;
  };
  preventScrolling?: boolean;
  updateConfig(
    callbackFn: (
      config: NgxPrimerAccordionConfig,
    ) => Partial<NgxPrimerAccordionConfig>,
  ): void;
  updateConfig(newConfig: Partial<NgxPrimerAccordionConfig>): void;
  resetConfig(target: NgxPrimerAccordionConfig): void;
}
export const defaultAccordionConfig: () => NgxPrimerAccordionConfig = () => ({
  type: 'Multiple',
  collapsible: true,
  orientation: 'Vertical',
  theme: {
    builtIn: true,
  },
  preventScrolling: true,
  updateConfig(
    callbackFn:
      | Partial<NgxPrimerAccordionConfig>
      | ((
          config: NgxPrimerAccordionConfig,
        ) => Partial<NgxPrimerAccordionConfig>),
  ): void {
    const updatedConfig =
      typeof callbackFn === 'function' ? callbackFn(this) : { ...callbackFn };
    Object.assign(this, { ...updatedConfig });
  },
  resetConfig(target: NgxPrimerAccordionConfig): void {
    Object.assign(target, defaultAccordionConfig());
  },
});
export function provideAccordionConfig(
  config: Partial<NgxPrimerAccordionConfig>,
): Provider {
  return [
    {
      provide: NgxPrimerAccordionConfigToken,
      useValue: {
        ...defaultAccordionConfig(),
        ...config,
      },
    },
  ];
}
export function injectAccordionConfig(): NgxPrimerAccordionConfig {
  return (
    inject(NgxPrimerAccordionConfigToken, {
      optional: true,
      self: true,
      host: true,
    }) ?? defaultAccordionConfig()
  );
}
