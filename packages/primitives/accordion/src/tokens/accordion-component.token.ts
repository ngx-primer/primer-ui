import {
  NgxPrimerAccordionContentComponent,
  NgxPrimerAccordionItemComponent,
  NgxPrimerAccordionRootComponent,
  NgxPrimerAccordionTriggerComponent,
} from '../components';

import { InjectionToken } from '@angular/core';

/**
 * Injection token for the root component of the NgxPrimerAccordion.
 * 
 * This token is used to inject the root component of the accordion, which is
 * of type `NgxPrimerAccordionRootComponent<unknown>`.
 * 
 * @constant
 * @type {InjectionToken<NgxPrimerAccordionRootComponent<unknown>>}
 */
export const NgxPrimerAccordionRootComponentToken = new InjectionToken<
  NgxPrimerAccordionRootComponent<unknown>
>('NgxPrimerAccordionRootComponentToken');

/**
 * Injection token for the NgxPrimerAccordionItemComponent.
 * 
 * This token is used to inject the NgxPrimerAccordionItemComponent
 * into other components or services.
 * 
 * @type {InjectionToken<NgxPrimerAccordionItemComponent<unknown>>}
 */
export const NgxPrimerAccordionItemComponentToken = new InjectionToken<
  NgxPrimerAccordionItemComponent<unknown>
>('NgxPrimerAccordionItemComponentToken');

/**
 * Injection token for the NgxPrimerAccordionTriggerComponent.
 * This token is used to inject the NgxPrimerAccordionTriggerComponent
 * into other components or services.
 *
 * @type {InjectionToken<NgxPrimerAccordionTriggerComponent<unknown>>}
 */
export const NgxPrimerAccordionTriggerComponentToken = new InjectionToken<
  NgxPrimerAccordionTriggerComponent<unknown>
>('NgxPrimerAccordionTriggerComponentToken');

/**
 * Injection token for the NgxPrimerAccordionContentComponent.
 * This token is used to inject the NgxPrimerAccordionContentComponent
 * into other components or services.
 *
 * @type {InjectionToken<NgxPrimerAccordionContentComponent<unknown>>}
 */
export const NgxPrimerAccordionContentComponentToken = new InjectionToken<
  NgxPrimerAccordionContentComponent<unknown>
>('NgxPrimerAccordionContentComponentToken');
