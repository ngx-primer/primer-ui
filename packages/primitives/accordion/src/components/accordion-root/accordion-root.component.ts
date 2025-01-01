/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Component,
  HostBinding,
  OnInit,
  contentChildren,
  inject,
  model,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgxPrimerAccordionItemComponent } from '../accordion-item/accordion-item.component';
import { NgxPrimerIdGeneratorDirective } from '@ngx-primer/utilities';
import { injectAccordionConfig } from '../../configs/accordion-config';

@Component({
  selector: 'ngx-primer-accordion-root',
  standalone: true,
  imports: [CommonModule],
  hostDirectives: [
    {
      directive: NgxPrimerIdGeneratorDirective,
      inputs: ['ngxPrimerIdAttr'],
    },
  ],
  templateUrl: './accordion-root.component.html',
  styleUrl: './accordion-root.component.scss',
  exportAs: 'ngxPrimerAccordionRootComponent',
})
export class NgxPrimerAccordionRootComponent<T> implements OnInit {
  /**
   * Id generator for the accordion root.
   * 
   * @default NgxPrimerIdGeneratorDirective
   */
  protected readonly idGenerator = inject(NgxPrimerIdGeneratorDirective, {
    host: true,
    optional: true,
  });

  /**
   * Unique id for the accordion root.
   * 
   * @default 'ngx-primer-accordion-root'
   */
  protected get uniqueId(): string {
    return this.idGenerator?.resolvedId ?? 'ngx-primer-accordion-root';
  }

  /**
   * Id for the accordion root.
   * 
   * @default this.uniqueId
   */
  public readonly accordionRootId = this.uniqueId;
  
  /**
   * Accordion configuration.
   * 
   * @default {}
   */
  public readonly accordionConfig = injectAccordionConfig();

  /**
   * Accordion items context.
   * 
   * @default []
   */
  protected readonly accordionItemsContext = contentChildren(
    NgxPrimerAccordionItemComponent,
    {
      descendants: true,
      read: NgxPrimerAccordionItemComponent,
    },
  );

  /**
   * Accordion type.
   * 
   * @default 'Single'
   */
  public readonly type = model(this.accordionConfig.type, {
    alias: 'ngxPrimerAccordionType',
  });

  /**
   * Accordion collapsible.
   * 
   * @default true
   */
  public readonly collapsible = model<boolean>(
    this.accordionConfig.collapsible,
    {
      alias: 'ngxPrimerAccordionCollapsible',
    },
  );

  /**
   * Accordion value.
   * 
   * @default null
   */
  public readonly value = model<T | T[] | null>(null, {
    alias: 'ngxPrimerAccordionValue',
  });

  /**
   * Accordion default value.
   * 
   * @default null
   */
  public readonly defaultValue = model<T | T[] | null>(null, {
    alias: 'ngxPrimerAccordionDefaultValue',
  });

  /**
   * Accordion disabled.
   * 
   * @default false
   */
  public readonly disabled = model<boolean>(false, {
    alias: 'ngxPrimerAccordionDisabled',
  });

  /**
   * Accordion orientation.
   * 
   * @default 'vertical'
   */
  public readonly orientation = model(this.accordionConfig.orientation, {
    alias: 'ngxPrimerAccordionOrientation',
  });

  /**
   * Chek if the value is open.
   * 
   * @param value The value to check if it is open.
   * @returns boolean
   */
  public isOpen(value: T): boolean {
    return this.type() === 'Multiple'
      ? ((this.value() as T[] | null)?.includes(value) ?? false)
      : this.value() === value;
  }

  /**
   * Toggle the value.
   * 
   * @param value The value to toggle.
   * @returns void
   */
  public toggle(value: T): void {
    const isOpenValue = this.isOpen(value);

    if (this.type() === 'Single') {
      this.toogleSingle(value, isOpenValue);
    }

    if (this.type() === 'Multiple') {
      this.toogleMultiple(value, isOpenValue);
    }
  }

  /**
   * Toggle the value.
   * 
   * @param value The value to toggle.
   * @param isOpen Flag to check if the value is open.
   * @returns void
   */
  protected toogleSingle(value: T, isOpen: boolean) {
    if (isOpen && !this.collapsible()) return;
    this.value.set(isOpen ? null : value);
  }
  
  /**
   * Toggles Multiple value.
   * 
   * @param value The value to toggle.
   * @param isOpenValue Flag to check if the value is open.
   * @returns void
   */
  protected toogleMultiple(value: T, isOpenValue: boolean) {
    const values = Array.isArray(this.value())
      ? [...(this.value() as T[])]
      : [this.value()];

    if (isOpenValue) {
      // @ts-expect-error
      this.value.set(values?.filter((v) => v !== value));
    } else {
      this.value.set([...(values as T[]), value]);
    }
  }

  public moveFocus(currentIndex: number, direction = 1) {
    const accordionItems = this.accordionItems;
    const nextIndex =
      (currentIndex + direction + accordionItems.length) %
      accordionItems.length;
    accordionItems[nextIndex].focus();
  }

  public moveFocusToEnd() {
    this.moveFocus(this.accordionItems.length - 1);
  }

  public moveFocusToStart() {
    this.moveFocus(0);
  }

  public expandAll() {
    this.toggleAll(true);
  }

  public collapseAll() {
    this.toggleAll(false);
  }

  public toogleAllValue() {
    this.toggleAll();
  }

  private toggleAll(isOpen?: boolean) {
    if (this.type() === 'Single' || this.disabled()) return;

    this.accordionItems?.forEach(({ disabled, value }) => {
      if (disabled()) return;
      this.toogleMultiple(value(), isOpen ?? this.isOpen(value()));
    });
  }

  public expand(value: T | T[]) {
    this.toggleValue(value, true);
  }

  public collapse(value: T | T[]) {
    this.toggleValue(value, false);
  }

  protected toggleValue(value: T | T[], isExpanding: boolean) {
    const handleToggle = (v: T) => {
      const isOpen = this.isOpen(v);

      if (isExpanding && !isOpen) {
        this.toogleSingle(v, true); // Expanding
      } else if (!isExpanding && isOpen) {
        this.toogleSingle(v, false); // Collapsing
      }
    };

    if (Array.isArray(value)) {
      value.forEach(handleToggle);
    } else {
      handleToggle(value);
    }
  }

  public enable(value: T | T[]) {
    this.updateDisableState(value, true);
  }

  public disable(value: T | T[]) {
    this.updateDisableState(value, false);
  }

  protected updateDisableState(value: T | T[], enable: boolean) {
    const values = Array.isArray(value) ? value : [value];

    const accordionItems = this.accordionItems?.filter((item) =>
      values.includes(item.value()),
    );

    const update = (
      item: NgxPrimerAccordionItemComponent<T>,
      enable: boolean,
    ) => {
      const isDisabled = item.disabled();
      const shouldDisable = !enable;

      if (isDisabled !== shouldDisable) {
        item.disabled.set(shouldDisable ? true : false);
      }
    };

    accordionItems.forEach((item) => update(item, enable));
  }

  public get accordionItems() {
    return this.accordionItemsContext();
  }
  
  @HostBinding('attr.data-orientation')
  public get dataOrientationAttr() {
    return this.accordionConfig.orientation;
  }

  @HostBinding('attr.data-disabled')
  public get dataDisabledAttr() {
    return this.disabled() ? '' : null;
  }

  @HostBinding('attr.data-type')
  public get dataTypeAttr() {
    return this.type();
  }

  ngOnInit(): void {
    this.runInitializationFn();
  }

  protected runInitializationFn(doneFn?: <P>(args?: P) => void): void {
    if (this.defaultValue()) {
      this.value.set(this.defaultValue()); // Set default value if provided.
    }

    if (doneFn) {
      setTimeout(() =>
        doneFn({
          context: this,
        }),
      );
    }
  }
}
