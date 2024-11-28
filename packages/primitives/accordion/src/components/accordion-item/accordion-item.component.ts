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
  OnInit,
  contentChild,
  inject,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgxPrimerAccordionContentComponent } from '../accordion-content/accordion-content.component';
import { NgxPrimerAccordionItemContext } from '../../contexts/accordion-item/accordion-item.context';
import { NgxPrimerAccordionRootContext } from '../../contexts/accordion-root/accordion-root.context';
import { NgxPrimerAccordionTriggerComponent } from '../accordion-trigger/accordion-trigger.component';

@Component({
  selector: 'ngx-primer-accordion-item',
  standalone: true,
  imports: [CommonModule],
  providers: [NgxPrimerAccordionItemContext],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.scss',
  exportAs: 'ngxPrimerAccordionItemComponent',
})
export class NgxPrimerAccordionItemComponent<T> implements OnInit {
  public readonly accordionRootContext = inject(NgxPrimerAccordionRootContext);
  public readonly accordionItemContext = inject(NgxPrimerAccordionItemContext);

  /**
   * Accordion content instance.
   */
  public readonly accordionContent = contentChild(
    NgxPrimerAccordionContentComponent,
    {
      descendants: true,
      read: NgxPrimerAccordionContentComponent,
    }
  );

  /**
   * Accordion trigger instance.
   */
  public readonly accordionTrigger = contentChild(
    NgxPrimerAccordionTriggerComponent,
    {
      descendants: true,
      read: NgxPrimerAccordionTriggerComponent,
    }
  );

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
    // set the context instance to allow inject in child component prevent manual prop drilling
    this.accordionItemContext.instance = this;

    if (doneFn) {
      doneFn({
        context: this.accordionItemContext
          .instance as NgxPrimerAccordionItemComponent<T>,
      });
    }
  }
}
