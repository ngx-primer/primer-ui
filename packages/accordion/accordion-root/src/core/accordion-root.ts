import { AccordionOrientationOption, AccordionTypeOption } from "../config/accordion-root.config";
import { Directive, HostBinding, InputSignal, InputSignalWithTransform, ModelSignal } from "@angular/core";

import { AccordionRootInterface } from "../interfaces/accoridon-root.interface";
import { useAccordionRootContext } from "../provider/accordion-root-config.provider";

const { 
  injectAccordionConfig
} = useAccordionRootContext();

@Directive({})
export class AccordionRoot<T> implements AccordionRootInterface<T> {
  /**
   * Access the global accordion confiurations.
   */
  protected readonly config = injectAccordionConfig();

  /**
   * The accordion root unique identifier.
   */
  protected readonly accordionRootId = this.config.uniqueIdPefix;

  /**
   * The accordion type
   */
  public readonly type!: InputSignal<AccordionTypeOption>;

  /**
   * The collapsible represnet whic accordion can be collapsed or expanded.
   */
  public readonly collapsible!:  InputSignalWithTransform<boolean, unknown>;

  /**
   * Determine that accordion is disabled.
   */
  public readonly disabled!: InputSignalWithTransform<boolean, unknown>

  /**
   * The accordion orientation config.
   */
  public readonly orientation!: InputSignal<AccordionOrientationOption>;

  /**
   * The accordion instance value.
   */
  public readonly value!: ModelSignal<T | T[] | null>;

  /**
   * Determine the state of accordion value.
   * 
   * @param value The value to check.
   * @returns Whether the value is open.
   * @internals
   * 
   */
  public isOpen(value: T) : boolean {
    if(this.type() === "Multiple") {
      return (this.value as unknown as T[] | null)?.includes(value) ?? false;
    }
    return this.value() === value;
  }

  /**
   * Toogle given value and reflect the changes into the UI.
   * 
   * @param value The value to be toogled.
   * @returns void
   */
  public toogle(value: T): void {
    const isOpen = this.isOpen(value);

    // if we are in single mode and the value is already open and the accordion is not collapsible, do nothing
    if (this.type() === 'Single' && isOpen && !this.collapsible()) {
      return;
    }

    // if we are in single mode then toggle the value
    if (this.type() === 'Single') {
      return;
    }

    // if we are in multiple mode then toggle the value
    const values = (this.value() as T[]) ?? [];

    if (isOpen) {
      this.value.set(values.filter(v => v !== value));
    } else {
      this.value.set([...values, value]);
    }
  }

  /**
   * Bind data attr type to host element.
   */
  @HostBinding('attr.data-type')
  public get dataAttrType(){
    return this.type()
  }

  /**
   * Bind data attr collapsible to host element.
   */
  @HostBinding('attr.data-collapsible')
  public get dataAttrCollapsible() {
    return this.collapsible();
  }
  
  /**
   * Bind data attr disabled to host element.
   */
  @HostBinding('attr.data-disabled')
  public get dataAttrDisabled() {
    return this.disabled()
  }
  
  /**
   * Bind data attr orientation to host element.
   */
  @HostBinding('attr.data-orientation')
  public get dataAttrOrientation() {
    return this.orientation();
  }
}
