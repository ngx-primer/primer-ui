import { Component, Injectable } from '@angular/core';

import { Context } from '@ngx-primer/primitive/utilities';

@Injectable()
export class NgxPrimerAccordionContentContext<
  NgxPrimerAccordionContentComponent extends Component
> extends Context<NgxPrimerAccordionContentComponent> {}
