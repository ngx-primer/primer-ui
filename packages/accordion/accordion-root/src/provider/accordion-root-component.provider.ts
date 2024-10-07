/* eslint-disable @typescript-eslint/ban-ts-comment */
import { InjectionToken, Provider, inject } from "@angular/core";

import { NgxPrimerAccordionRootComponent } from "../component";

export const AccordionRootComponentInjectionToken = new InjectionToken<NgxPrimerAccordionRootComponent<unknown>>('NgxPrimerAccordionRootComponent', {
  providedIn: 'root',
  // @ts-expect-error
  factory: () => NgxPrimerAccordionRootComponent<unknown>
})

export function provideAccordionRootComponent(): Provider[] {
  return [{
    provide: AccordionRootComponentInjectionToken,
    useExisting: NgxPrimerAccordionRootComponent,
  }]
}

export function injectAccordionComponent<T>(){
  return inject(AccordionRootComponentInjectionToken) as NgxPrimerAccordionRootComponent<T>
}

/**
 * Expose ngx primer accordion component though angular dependency injection system.
 * 
 * @returns 
 */
export const useNgxPrimerAccordionComponent = () => ({
  provideAccordionRootComponent,
  injectAccordionComponent
})