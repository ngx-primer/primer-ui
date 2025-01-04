import { Component, HostBinding, OnInit, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgxPrimerAccordionItemComponent } from '../accordion-item/accordion-item.component';
import { NgxPrimerAccordionRootComponent } from '../accordion-root/accordion-root.component';
import { NgxPrimerIdGeneratorDirective } from '@ngx-primer/utilities';

@Component({
  selector: 'ngx-primer-accordion-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion-content.component.html',
  styleUrl: './accordion-content.component.scss',
  hostDirectives: [
    {
      directive: NgxPrimerIdGeneratorDirective,
      inputs: ['ngxPrimerIdAttr'],
    },
  ],
})
export class NgxPrimerAccordionContentComponent<T> implements OnInit {
  /**
   * Id generator for the accordion content.
   * 
   * @default NgxPrimerIdGeneratorDirective
   */
  protected readonly idGenerator = inject(NgxPrimerIdGeneratorDirective, {
    host: true,
    optional: true,
  });

  /**
   * Unique id for the accordion content.
   * 
   * @default 'ngx-primer-accordion-content'
   */
  public readonly accordionContentId = this.idGenerator?.resolvedId;

  /**
   * Accordion item component.
   * 
   * @default NgxPrimerAccordionItemComponent
   */
  protected readonly accordionItemContext = inject(
    NgxPrimerAccordionItemComponent,
    {
      host: true,
      optional: true,
    },
  );

  /**
   * Accordion item component.
   */
  public get accordionItem(): NgxPrimerAccordionItemComponent<T> | null | undefined {
    return this.accordionItemContext;
  }

  /**
   * Accordion root component.
   */
  public get accordionRoot(): NgxPrimerAccordionRootComponent<T> | null | undefined {
    return this.accordionItem?.accordionRoot;
  }

  /**
   * Accordion trigger component.
   * 
   * Binds the accordion trigger component to the accordion item trigger.
   */
  public get accordionTrigger() {
    return this.accordionItem?.accordionTrigger;
  }

  /**
   * Accordion content component.
   * 
   * Binds the id attribute to the accordion content id.
   */
  @HostBinding('role')
  public get roleAttr(): string {
    return 'region';
  }

  /**
   * Accordion content component.
   * 
   * Binds the id attribute to the accordion content id.
   */
  @HostBinding('attr.data-orientation')
  public get dataOrientationAttr(): string | null | undefined {
    return this.accordionRoot?.orientation();
  }

  /**
   * Accordion content component.
   * 
   * Binds the data-expanded attribute to the accordion item isOpen state.
   */
  @HostBinding('attr.data-expanded')
  public get dataExpandedAttr(): boolean | null | undefined {
    return this.accordionItem?.isOpen();
  }

  /**
   * Accordion content component.
   * 
   * Binds the data-is-open attribute to the accordion item isOpen state.
   */
  @HostBinding('attr.data-is-open')
  public get dataIsOpenAttr(): boolean | null | undefined {
    return this.accordionItem?.isOpen();
  }

  /**
   * Accordion content component.
   * 
   * Binds the aria-labelledby attribute to the accordion trigger id.
   */
  @HostBinding('attr.aria-labelledby')
  public get dataAriaLabelledByAttr(): string | null | undefined {
    return this.accordionItem?.accordionTrigger?.accordionTriggerId;
  }

  /**
   * Accordion content component.
   * 
   * Binds the data-value attribute to the accordion item value.
   */
  @HostBinding('attr.data-value')
  public get dataValueAttr(): T | null | undefined {
    return this.accordionItem?.value() as T;
  }

  /**
   * Initializes the component.
   */
  ngOnInit(): void {
    this.runInitializationFn();
  }

  /**
   * Runs the initialization function if provided.
   * 
   * @param doneFn - Optional callback function to be executed during initialization.
   */
  protected runInitializationFn(doneFn?: <P>(args?: P) => void): void {
    if (doneFn) {
      doneFn({
        context: this,
      });
    }
  }
}
