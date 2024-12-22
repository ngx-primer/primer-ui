/**
 * Copyright [2024] [ElhakimDev]
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {
  Component,
  HostBinding,
  Injector,
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
import { NgxPrimerIdGeneratorDirective } from '@ngx-primer/primitive/utilities';

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
  protected readonly injector = inject(Injector);

  protected readonly idGenerator = inject(NgxPrimerIdGeneratorDirective, {
    host: true,
    optional: true,
  });

  protected readonly accordionItemId = this.idGenerator?.resolvedId;

  protected readonly accordionRootContext = inject(
    NgxPrimerAccordionRootComponent,
    {
      optional: true,
      host: true,
    }
  );

  /**
   * Accordion content instance.
   */
  protected readonly accordionContentContext = contentChild(
    NgxPrimerAccordionContentComponent,
    {
      descendants: true,
      read: NgxPrimerAccordionContentComponent,
    }
  );

  /**
   * Accordion trigger instance.
   */
  protected readonly accordionTriggerContext = contentChild(
    NgxPrimerAccordionTriggerComponent,
    {
      descendants: true,
      read: NgxPrimerAccordionTriggerComponent,
    }
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
    () => this.accordionRoot?.isOpen(this.value() as T) ?? false
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

  /**
   * Runs the initialization logic for the accordion component, setting up default values and context.
   *
   * This method initializes the accordion component, optionally setting a default value if provided.
   * It also sets the context instance to allow dependency injection in child components,
   * preventing the need for manual prop drilling.
   *
   * If a `doneFn` callback is provided, it will be executed after the initialization process
   * with the current context and value.
   *
   * ### Parameters
   * - `doneFn` (Optional): A callback function that will be executed after initialization.
   *   It receives an object with the `context` and `value` properties, where:
   *   - `context`: The current instance of the accordion component's root context.
   *   - `value`: The current value of the accordion, either the default value or a set value.
   *
   * ### Returns
   * This method does not return anything. It performs initialization tasks and optionally invokes the callback.
   *
   * ### Example Usage
   * ```typescript
   * // In the accordion component
   * this.runInitializationFn((params) => {
   *   console.log('Accordion initialized with context:', params.context);
   *   console.log('Initial value:', params.value);
   * });
   * ```
   *
   * ### Description
   * - **Context Setup**: The `accordionRootContext.instance` is set to the current accordion instance,
   *   making it accessible for child components through dependency injection.
   * - **Default Value**: If a default value is set for the accordion, it will be applied at initialization.
   * - **Callback Execution**: If the `doneFn` callback is provided, it is executed with the current context and value.
   */
  protected runInitializationFn(doneFn?: <P>(args?: P) => void): void {
    if (doneFn) {
      // ensure context being initalized
      setTimeout(() =>
        doneFn({
          context: this,
        })
      );
    }
  }

  public get accordionRoot() {
    return this.accordionRootContext;
  }

  public get accordionContent() {
    return this.accordionContentContext();
  }

  public get accordionTrigger() {
    return this.accordionTriggerContext();
  }

  public focus() {
    this.accordionTrigger?.focus();
  }
}
