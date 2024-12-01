import { Component, Injectable } from '@angular/core';

import { Context } from '@ngx-primer/primitive/utilities';

@Injectable()
export class NgxPrimerAccordionItemContext<
  NgxPrimerAccordionItemComponent extends Component
> extends Context<NgxPrimerAccordionItemComponent> {}
