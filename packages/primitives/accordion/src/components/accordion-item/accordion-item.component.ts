import {
  Component,
  HostBinding,
  OnInit,
  computed,
  contentChild,
  inject,
  model,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgxPrimerAccordionContentComponent } from '../accordion-content/accordion-content.component';
import { NgxPrimerAccordionRootComponent } from '../accordion-root/accordion-root.component';
import { NgxPrimerAccordionTriggerComponent } from '../accordion-trigger/accordion-trigger.component';
import { NgxPrimerIdGeneratorDirective } from '@ngx-primer/utilities';

@Component({
  selector: 'ngx-primer-accordion-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.scss',
  exportAs: 'ngxPrimerAccordionItemComponent',
  hostDirectives: [
    {
      directive: NgxPrimerIdGeneratorDirective,
      inputs: ['ngxPrimerIdAttr'],
    },
  ],
})
export class NgxPrimerAccordionItemComponent<T> implements OnInit {
  /**
   * Id generator for the accordion item.
   */
  protected readonly idGenerator = inject(NgxPrimerIdGeneratorDirective, {
    host: true,
    optional: true,
  });

  /**
   * Unique id for the accordion item.
   */
  protected readonly accordionItemId = this.idGenerator?.resolvedId;

  /**
   * Accordion root component.
   */
  protected readonly accordionRootContext = inject(
    NgxPrimerAccordionRootComponent,
    {
      optional: true,
      host: true,
    },
  );

  /**
   * Accordion content component.
   */
  protected readonly accordionContentContext = contentChild(
    NgxPrimerAccordionContentComponent,
    {
      descendants: true,
      read: NgxPrimerAccordionContentComponent,
    },
  );

  /**
   * Accordion item component.
   */
  protected readonly accordionTriggerContext = contentChild(
    NgxPrimerAccordionTriggerComponent,
    {
      descendants: true,
      read: NgxPrimerAccordionTriggerComponent,
    },
  );

  public readonly value = model<T | null>(null, {
    alias: 'ngxPrimerAccordionItemValue',
  });

  /**
   * Whether the accordion item is disabled.
   */
  public readonly disabled = model(false, {
    alias: 'ngxPrimerAccordionItemDisabled',
  });

  public readonly isOpen = computed<boolean>(
    () => this.accordionRoot?.isOpen(this.value() as T) ?? false,
  );

  @HostBinding('attr.data-orientation')
  public get dataOrientationAttr() {
    return this.accordionRoot?.orientation();
  }

  @HostBinding('attr.data-is-open')
  public get dataIsOpenAttr() {
    return this.isOpen();
  }

  @HostBinding('attr.data-value')
  public get dataValueAttr() {
    return this.value();
  }

  @HostBinding('attr.data-disabled')
  public get dataDisabledAttr() {
    return this.accordionRoot?.disabled();
  }

  ngOnInit(): void {
    this.runInitializationFn();
  }

  protected runInitializationFn(doneFn?: <P>(args?: P) => void): void {
    if (doneFn) {
      // ensure context being initalized
      setTimeout(() =>
        doneFn({
          context: this,
        }),
      );
    }
  }

  /**
   * Accordion root instance.
   */
  public get accordionRoot() {
    return this.accordionRootContext;
  }

  /**
   * Accordion content instance.
   */
  public get accordionContent() {
    return this.accordionContentContext();
  }

  /**
   * Accordion trigger instance.
   */
  public get accordionTrigger() {
    return this.accordionTriggerContext();
  }

  /**
   * Focuses the accordion trigger.
   */
  public focus() {
    this.accordionTrigger?.focus();
  }
}
