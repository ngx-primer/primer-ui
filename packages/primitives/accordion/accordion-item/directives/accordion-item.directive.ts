import { AccordionItem } from "../core";
import { Directive } from "@angular/core";

@Directive({
  selector: '[ngxPrimerAccordionItemDirective]',
  exportAs: 'ngxPrimerAccordionItemDirective',
})
export class NgxPrimerAccordionItemDirective<T> extends AccordionItem<T> {
}