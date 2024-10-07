import { AccordionOrientationOption, AccordionTypeOption } from "../config/accordion-root.config"
import { InputSignal, InputSignalWithTransform, ModelSignal } from "@angular/core"

export interface AccordionRootInterface<T> {
  type: InputSignal<AccordionTypeOption>;  
  collapsible:  InputSignalWithTransform<boolean, unknown>;
  disabled: InputSignalWithTransform<boolean, unknown>
  orientation: InputSignal<AccordionOrientationOption>;
  value: ModelSignal<T | T[] | null>;
  toogle(value: T): void;
  isOpen(value: T) : boolean;
}