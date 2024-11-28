import { NgxPrimerAccordionContentComponent, NgxPrimerAccordionItemComponent, NgxPrimerAccordionRootComponent, NgxPrimerAccordionTriggerComponent } from '../components';

import { InjectionToken } from '@angular/core';

export const NgxPrimerAccordionRootComponentToken = new InjectionToken<
  NgxPrimerAccordionRootComponent<unknown>
>('NgxPrimerAccordionRootComponentToken');

export const NgxPrimerAccordionItemComponentToken = new InjectionToken<
  NgxPrimerAccordionItemComponent<unknown>
>('NgxPrimerAccordionItemComponentToken');

export const NgxPrimerAccordionTriggerComponentToken = new InjectionToken<
NgxPrimerAccordionTriggerComponent<unknown>
>('NgxPrimerAccordionTriggerComponentToken');

export const NgxPrimerAccordionContentComponentToken = new InjectionToken<
NgxPrimerAccordionContentComponent<unknown>
>('NgxPrimerAccordionContentComponentToken');
