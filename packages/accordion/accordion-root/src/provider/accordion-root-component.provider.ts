import { InjectionToken, Provider, forwardRef, inject } from "@angular/core";

import { NgxPrimerAccordionRootComponent } from "../component";

export const AccordionRootComponentInjectionToken: InjectionToken<NgxPrimerAccordionRootComponent<unknown>> = new InjectionToken<NgxPrimerAccordionRootComponent<unknown>>('NgxPrimerAccordionRootComponent')

export function provideAccordionRootComponent(): Provider[] {
  return [{
    provide: AccordionRootComponentInjectionToken,
    useExisting: forwardRef(() => NgxPrimerAccordionRootComponent),
  }]
}

export function injectAccordionRootComponent<T>(){
  return inject(AccordionRootComponentInjectionToken) as NgxPrimerAccordionRootComponent<T>
}

/**
 * Expose ngx primer accordion component though angular dependency injection system.
 * 
 * @returns 
 */
export const useNgxPrimerAccordionComponent = () => ({
  provideAccordionRootComponent,
  injectAccordionRootComponent
})