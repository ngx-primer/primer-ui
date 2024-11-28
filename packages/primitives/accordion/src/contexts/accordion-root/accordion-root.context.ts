import { Component, Injectable } from '@angular/core';

import { Context } from '@ngx-primer/primitive/utilities';

@Injectable()
export class NgxPrimerAccordionRootContext<
  NgxPrimerAccordionRootComponent extends Component
> extends Context<NgxPrimerAccordionRootComponent> {
}
