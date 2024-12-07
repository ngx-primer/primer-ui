import { Component, Injectable } from '@angular/core';

import { Context } from '@ngx-primer/primitive/utilities';

@Injectable()
export class NgxPrimerAccordionTriggerContext<
  NgxPrimerAccordionTriggerComponent extends Component
> extends Context<NgxPrimerAccordionTriggerComponent> {}
