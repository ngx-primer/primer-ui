import { InjectionToken, Provider, forwardRef, inject } from "@angular/core";

import { NgxPrimerAccordionItemComponent } from "../component";

export const AccordionRootComponentInjectionToken: InjectionToken<NgxPrimerAccordionItemComponent<unknown>> = new InjectionToken<NgxPrimerAccordionItemComponent<unknown>>('NgxPrimerAccordionItemComponent')

export function provideAccordionRootComponent(): Provider[] {
  return [{
    provide: AccordionRootComponentInjectionToken,
    useExisting: forwardRef(() => NgxPrimerAccordionItemComponent<unknown>),
  }]
}

export function injectAccordionRootComponent<T>(){
  return inject(AccordionRootComponentInjectionToken, {
    host: true,
    optional: true,
  }) as NgxPrimerAccordionItemComponent<T>
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