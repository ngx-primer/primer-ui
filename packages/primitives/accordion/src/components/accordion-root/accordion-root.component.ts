import { Component, booleanAttribute, contentChildren, inject, input, model } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgxPrimerAccordionItemComponent } from '../accordion-item/accordion-item.component';
import { NgxPrimerAccordionRootThemeVariantDirective } from '../../directives';
import { injectAccordionConfig } from '../../configs/accordion-config';

@Component({
  selector: 'ngx-primer-accordion-root',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './accordion-root.component.html',
  styleUrl: './accordion-root.component.scss',
  exportAs: 'ngxPrimerAccordionRootComponent'
})
export class NgxPrimerAccordionRootComponent<T> {
  /**
   * The ref objects represent current instance.
   */
  public readonly accordion = this;

  public readonly accordionId = '';
  
  /**
   * The accordion config instance.
   */
  public readonly accordionConfig = injectAccordionConfig();
  
  /**
   * The accordion items intances.
   */
  public readonly accordionItems = contentChildren(NgxPrimerAccordionItemComponent, {
    descendants: true,
    read: NgxPrimerAccordionItemComponent
  });

  /**
   * The accoridon root theme varian directive instances.
   */
  public readonly accordionRootThemeVariant = inject(NgxPrimerAccordionRootThemeVariantDirective, {
    self: true,
    optional: true,
    host: true,
  });

  /**
   * The accordion root type input props.
   */
  public readonly type = input(this.accordionConfig.type, {
    alias: 'ngxPrimerAccordionType',
  });
  
  /**
   * The accordion root type input props.
   */
  public readonly collapsible = input<boolean, boolean>(this.accordionConfig.collapsible, {
    alias: 'ngxPrimerAccordionCollapsible',
    transform: booleanAttribute,
  });
  
  /**
   * The accordion root value input props.
   */
  public readonly value = model<T | T[] | null>(null, {
    alias: 'ngxPrimerAccordionValue'
  });
  
  /**
   * The accordion root defaultValue input props.
   */
  public readonly defaultValue = input<T | T[] | null>(null, {
    alias: 'ngxPrimerAccordionDefaultValue'
  });
  
  /**
   * The accordion root disabled input props.
   */
  public readonly disabled = input<boolean, boolean>(false, {
    alias: 'ngxPrimerAccordionDisabled',
    transform: booleanAttribute,
  });
  
  /**
   * The accordion root orientation input props.
   */
  public readonly orientation = input(this.accordionConfig.orientation, {
    alias: 'ngxPrimerAccordionOrientation',
  });

  // --------------------------- Method ---------------------------------- //

  public isOpen(value: T) {
    return this.type() === 'Multiple' ? ((this.value() as T[] | null)?.includes(value) ?? false) : this.value() === value
  }
  
  public toggle(value: T){
    const isOpenValue = this.isOpen(value);
    
    if(this.type() === "Single" && isOpenValue && !this.collapsible()) {
      return;
    }

    if(this.type() === "Single") {
      this.value.set(isOpenValue ? null : value);
    }

    const values = (this.value() as T[]) ?? [];

    if(isOpenValue){
      this.value.set(values.filter(v => v !== value));
    } else {
      this.value.set([...values, value]);
    }
  }
}
