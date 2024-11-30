/* eslint-disable @angular-eslint/no-input-rename */
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
  booleanAttribute,
  contentChild,
  contentChildren,
  inject,
  input,
  model,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgxPrimerAccordionItemComponent } from '../accordion-item/accordion-item.component';
import { NgxPrimerAccordionRootContext } from '../../contexts/accordion-root/accordion-root.context';
import { NgxPrimerIdGeneratorDirective } from '@ngx-primer/primitive/utilities';
import { injectAccordionConfig } from '../../configs/accordion-config';

@Component({
  selector: 'ngx-primer-accordion-root',
  standalone: true,
  imports: [CommonModule],
  providers: [NgxPrimerAccordionRootContext],
  templateUrl: './accordion-root.component.html',
  styleUrl: './accordion-root.component.scss',
  exportAs: 'ngxPrimerAccordionRootComponent',
})
export class NgxPrimerAccordionRootComponent<T> implements OnInit {
  /**
   * Injects the `AccordionRootContext` service into the component or directive.
   *
   * This property provides access to the root context of an accordion,
   * enabling interaction or data sharing between the accordion root
   * and its child components, such as items, triggers, and content.
   *
   * ### Example Usage
   * ```typescript
   * export class AccordionItemComponent {
   *   public readonly accordionRootContext = inject(AccordionRootContext);
   *
   *   constructor() {
   *     const context = this.accordionRootContext.getInstance();
   *     console.log(context); // Access the accordion root instance
   *   }
   * }
   * ```
   *
   * ### Purpose
   * - Facilitates communication between the root and its children.
   * - Allows child components to access shared state or methods provided by the root.
   *
   * @see AccordionRootContext
   */
  public readonly accordionRootContext = inject(NgxPrimerAccordionRootContext, {
    optional: true
  });

  /**
   * Provides the configuration for the accordion component by injecting the `AccordionConfig` service.
   *
   * The `accordionConfig` property allows access to customizable settings
   * and configurations for the accordion, such as default behaviors, styles,
   * or other shared properties. These configurations can be tailored globally
   * or overridden at specific component levels.
   *
   * ### Example Usage
   * ```typescript
   * export class AccordionComponent {
   *   public readonly accordionConfig = injectAccordionConfig();
   *
   *   constructor() {
   *     console.log(this.accordionConfig); // Access accordion-specific configurations
   *   }
   * }
   * ```
   *
   * ### Purpose
   * - Centralizes the configuration for the accordion component.
   * - Promotes consistency and reusability across multiple accordion instances.
   * - Allows for easy updates and modifications to default settings.
   *
   * @see AccordionConfig
   */
  public readonly accordionConfig = injectAccordionConfig();

  /**
   * Retrieves the instance of `NgxPrimerIdGeneratorDirective` within the content of the accordion component.
   *
   * The `accordionIdGenerator` is a `ContentChild` query that looks for the `NgxPrimerIdGeneratorDirective`
   * within the component's content, ensuring unique and consistent ID generation for accordion elements.
   *
   * ### Configuration
   * - **descendants**: Ensures the query searches recursively through all descendant elements.
   * - **read**: Specifies the directive (`NgxPrimerIdGeneratorDirective`) to be queried and retrieved.
   *
   * ### Use Case
   * This property is typically used to provide a mechanism for generating unique IDs for
   * accordion elements, such as items, triggers, or content sections. It enables better accessibility
   * and avoids ID conflicts in dynamically generated content.
   *
   * ### Example Usage
   * ```typescript
   * export class AccordionComponent {
   *   @ContentChild(NgxPrimerIdGeneratorDirective, { descendants: true, read: NgxPrimerIdGeneratorDirective })
   *   public readonly accordionIdGenerator;
   *
   *   generateUniqueId(): string {
   *     return this.accordionIdGenerator.generateId();
   *   }
   * }
   * ```
   *
   * ### Benefits
   * - Ensures ID uniqueness across all accordion elements.
   * - Integrates seamlessly with dynamic content or programmatic ID generation.
   *
   * @see NgxPrimerIdGeneratorDirective
   */
  public readonly accordionIdGenerator = contentChild(
    NgxPrimerIdGeneratorDirective,
    {
      descendants: true,
      read: NgxPrimerIdGeneratorDirective,
    }
  );

  /**
   * Retrieves the unique ID for the accordion component, generated by the injected ID generator.
   *
   * If the ID generator is unavailable or not provided, the method falls back to a default ID value.
   * This ensures that each accordion component has a unique identifier, which can be useful for accessibility or dynamic content rendering.
   *
   * ### Returns
   * - **string**: The unique ID for the accordion component, either generated by the injected ID generator or a default value if unavailable.
   *
   * ### Example Usage
   * ```typescript
   * // Access the generated accordion ID
   * const id = this.accordionId;
   * ```
   *
   * ### Behavior:
   * - If `accordionIdGenerator` is available, the `generatedId` from the generator is returned.
   * - If `accordionIdGenerator` is not available, a fallback ID value is returned (usually a default or empty string).
   */
  public get accordionId() {
    return this.accordionIdGenerator()?.generatedId;
  }

  /**
   * The list of accordion item instances that belong to this accordion root.
   *
   * This property is a `QueryList` that holds all the accordion items (i.e., `NgxPrimerAccordionItemComponent`)
   * within the current accordion component. The `QueryList` is updated automatically to reflect any changes
   * in the content of the accordion (e.g., if new items are added or removed).
   *
   * ### Type
   * - **QueryList<NgxPrimerAccordionItemComponent>**: A list of accordion items that are part of the current accordion root component.
   *
   * ### Example Usage
   * ```typescript
   * // Accessing the list of accordion items
   * const items = this.accordionItems;
   *
   * // Looping through the accordion items
   * this.accordionItems.forEach(item => {
   *   // Perform actions on each item
   * });
   * ```
   *
   * ### Behavior:
   * - The `accordionItems` list includes all `NgxPrimerAccordionItemComponent` instances that are within the root accordion, including descendants.
   * - The list is updated dynamically whenever the accordion content changes (e.g., items are added or removed).
   *
   * @type {QueryList<NgxPrimerAccordionItemComponent>} The accordion items within this component.
   */
  public readonly accordionItems = contentChildren(
    NgxPrimerAccordionItemComponent,
    {
      descendants: true,
      read: NgxPrimerAccordionItemComponent,
    }
  );

  /**
   * The accordion type (Single/Multiple).
   * This defines whether the accordion allows single or multiple items to be open at once.
   *
   * @type {string} The accordion type, either 'Single' or 'Multiple'.
   */
  public readonly type = input(this.accordionConfig.type, {
    alias: 'ngxPrimerAccordionType',
  });

  /**
   * The collapsible property for the accordion.
   * Determines whether the accordion can collapse or not.
   *
   * @type {boolean} True if the accordion is collapsible, false otherwise.
   */
  public readonly collapsible = input<boolean, boolean>(
    this.accordionConfig.collapsible,
    {
      alias: 'ngxPrimerAccordionCollapsible',
      transform: booleanAttribute,
    }
  );

  /**
   * The currently selected value(s) in the accordion.
   * This represents the values of the open accordion item(s).
   *
   * @type {T | T[] | null} The currently selected value(s) or null if no item is selected.
   */
  public readonly value = model<T | T[] | null>(null, {
    alias: 'ngxPrimerAccordionValue',
  });

  /**
   * The default value for the accordion.
   * This is the initial value to be set if no other value is provided.
   *
   * @type {T | T[] | null} The default selected value(s).
   */
  public readonly defaultValue = input<T | T[] | null>(null, {
    alias: 'ngxPrimerAccordionDefaultValue',
  });

  /**
   * Whether the accordion is disabled or not.
   * If true, the accordion and its items cannot be interacted with.
   *
   * @type {boolean} True if the accordion is disabled, false otherwise.
   */
  public readonly disabled = input<boolean, boolean>(false, {
    alias: 'ngxPrimerAccordionDisabled',
    transform: booleanAttribute,
  });

  /**
   * The orientation of the accordion (e.g., horizontal or vertical).
   *
   * @type {string} The accordion's orientation.
   */
  public readonly orientation = input(this.accordionConfig.orientation, {
    alias: 'ngxPrimerAccordionOrientation',
  });

  // --------------------------- Method ---------------------------------- //

  /**
   * Checks whether the given value is currently open in the accordion.
   *
   * This method checks the current state of the accordion and determines
   * if the specified value is currently "open" (i.e., selected or expanded).
   * The check behavior differs depending on the accordion type:
   * - For **Multiple** type accordions, it checks if the value is in the list of open values.
   * - For **Single** type accordions, it checks if the given value matches the currently selected value.
   *
   * @param {T} value The value to check. This can be any type defined for the accordion values (e.g., string, number, etc.).
   *
   * @returns {boolean} True if the value is open (i.e., selected or expanded), false otherwise.
   *
   * ### Example Usage
   * ```typescript
   * const isItemOpen = this.isOpen(itemValue);
   * if (isItemOpen) {
   *   // Handle the case where the item is open
   * } else {
   *   // Handle the case where the item is closed
   * }
   * ```
   *
   * ### Behavior:
   * - **Multiple Type**: If the accordion type is set to "Multiple", the method checks if the value exists in the list of selected/open values.
   * - **Single Type**: If the accordion type is set to "Single", the method checks if the value matches the currently selected value.
   */
  public isOpen(value: T): boolean {
    return this.type() === 'Multiple'
      ? (this.value() as T[] | null)?.includes(value) ?? false
      : this.value() === value;
  }

  /**
   * Toggles the open/closed state of a given accordion value based on the current state.
   *
   * This method checks whether the provided value is currently open and toggles it accordingly:
   * - If the accordion is in 'Single' mode and the value is already open, it will close it, unless `collapsible` is false.
   * - For multi-value accordions, it will add the value to the selected list if closed, or remove it if open.
   *
   * The method updates the `value` property to reflect the new state of the accordion.
   *
   * ### Parameters
   * - `value` (`T`): The value to toggle in the accordion. This could be any type that the accordion holds.
   *
   * ### Returns
   * This method does not return anything. It modifies the internal state of the accordion based on the toggled value.
   *
   * ### Example Usage
   * ```typescript
   * // To toggle an accordion item
   * this.toggle('item1'); // Toggles the open/closed state of 'item1'
   * ```
   *
   * ### Behavior:
   * - **Single Accordion Mode**:
   *   - In single-value mode (`type() === 'Single'`), if the value is already open, it will be set to `null` (closed) unless `collapsible` is set to `false`.
   *   - If the value is not open, it will be set as the current value.
   * - **Multi Accordion Mode**:
   *   - If the accordion allows multiple open values (`type() !== 'Single'`), it will toggle the presence of the value in the list of selected values.
   *   - If the value is currently open, it is removed from the list; if it's closed, it is added to the list.
   */
  public toggle(value: T): void {
    const isOpenValue = this.isOpen(value);

    // Prevent toggle for single-type accordion when collapsible is false and already open.
    if (this.type() === 'Single' && isOpenValue && !this.collapsible()) {
      return;
    }

    if (this.type() === 'Single') {
      this.value.set(isOpenValue ? null : value); // Set to null for single-value mode.
    }

    const values = (this.value() as T[]) ?? [];

    // Toggle the value in the selected values list.
    if (isOpenValue) {
      this.value.set(values.filter((v) => v !== value)); // Remove if currently open.
    } else {
      this.value.set([...values, value]); // Add if currently closed.
    }
  }

  // --------------------------- Hooks ---------------------------------- //

  /**
   * Angular initialization hook.
   * Runs the initialization function when the component is initialized.
   *
   * @returns {void} This method does not return anything.
   */
  ngOnInit(): void {
    this.runInitializationFn((ctx) => {
      console.log({ ctx });
    });
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
    if(this.accordionRootContext){
      this.accordionRootContext.instance = this;
    }

    if (this.defaultValue()) {
      this.value.set(this.defaultValue()); // Set default value if provided.
    }

    if (doneFn) {
      doneFn({
        context: this.accordionRootContext?.instance as NgxPrimerAccordionRootComponent<T>,
        value: this.value(),
      });
    }
  }
}
