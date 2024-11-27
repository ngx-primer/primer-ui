import { Component, Injectable } from '@angular/core';

import { Context } from '@ngx-primer/primitive/utilities';

@Injectable({
  providedIn: 'root',
})
export class AccordionRootContext<
  NgxPrimerAccordionRootComponent extends Component
> extends Context<NgxPrimerAccordionRootComponent> {}
