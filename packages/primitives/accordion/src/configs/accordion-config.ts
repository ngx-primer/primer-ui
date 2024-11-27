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
}
export const defaultAccordionConfig: () => NgxPrimerAccordionConfig = () => ({
  type: 'Multiple',
  collapsible: true,
  orientation: 'Vertical',
  theme: {
    builtIn: true,
  },
});
export function provideAccordionConfig(
  config: Partial<NgxPrimerAccordionConfig>
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
