/* eslint-disable @typescript-eslint/ban-ts-comment */
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
  OnInit,
  contentChildren,
  inject,
  model,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgxPrimerAccordionItemComponent } from '../accordion-item/accordion-item.component';
import { NgxPrimerAccordionRootContext } from '../../contexts/accordion-root/accordion-root.context';
import { NgxPrimerAccordionRootContextDirective } from '../../directives/component-context';
import { NgxPrimerIdGeneratorDirective } from '@ngx-primer/primitive/utilities';
import { injectAccordionConfig } from '../../configs/accordion-config';

/**
 * `NgxPrimerAccordionRootComponent` is the root component of the accordion, providing the context and structure
 * for the accordion's item and trigger components. It acts as the container for all accordion-related interactions
 * and configurations.
 *
 * This component integrates with the `NgxPrimerAccordionItemComponent` and `NgxPrimerAccordionTriggerComponent` to
 * create a fully functioning accordion UI. It manages the overall state, layout, and provides accessibility features
 * for the accordion elements.
 *
 * The component also leverages directives like `NgxPrimerIdGeneratorDirective` to generate unique IDs for each
 * accordion root instance and `NgxPrimerAccordionRootContextDirective` to provide a shared context across child
 * components.
 *
 * ### Selector
 * - `ngx-primer-accordion-root`: This is the HTML tag used to declare the accordion root component in templates.
 *
 * ### Providers
 * - `NgxPrimerAccordionRootContext`: The context provider for the accordion, which is injected into child components.
 *
 * ### Host Directives
 * - `NgxPrimerIdGeneratorDirective`: Responsible for generating unique IDs for the accordion root component.
 * - `NgxPrimerAccordionRootContextDirective`: Provides context for child components like items and triggers within
 *   the accordion, ensuring that they can communicate and share state seamlessly.
 *
 * ### Template and Styling
 * - The `accordion-root.component.html` file contains the structure of accoridon root whic use content projection `ng-content` to give user flexibility to create theor accordion with our Primitives Api.
 * - The `accordion-root.component.scss` file defines the styling for the accordion root, including visual presentation
 *   and responsive design adjustments.
 *
 * ### Usage
 * The `NgxPrimerAccordionRootComponent` is typically used as a wrapper for the entire accordion UI, with each item
 * and trigger being a child of this root component.
 *
 * @public
 * @component
 * @selector ngx-primer-accordion-root
 * @imports [CommonModule] Imports Angular's `CommonModule` to provide essential Angular features.
 * @providers [NgxPrimerAccordionRootContext] Provides context to child components.
 * @hostDirectives [
 *   { directive: NgxPrimerIdGeneratorDirective, inputs: ['ngxPrimerIdAttr'] },
 *   { directive: NgxPrimerAccordionRootContextDirective }
 * ]
 * @templateUrl './accordion-root.component.html'
 * @styleUrl './accordion-root.component.scss'
 * @exportAs 'ngxPrimerAccordionRootComponent'
 */
@Component({
  selector: 'ngx-primer-accordion-root',
  standalone: true,
  imports: [CommonModule],
  providers: [NgxPrimerAccordionRootContext],
  hostDirectives: [
    {
      directive: NgxPrimerIdGeneratorDirective,
      inputs: ['ngxPrimerIdAttr'],
    },
    {
      directive: NgxPrimerAccordionRootContextDirective,
    },
  ],
  templateUrl: './accordion-root.component.html',
  styleUrl: './accordion-root.component.scss',
  exportAs: 'ngxPrimerAccordionRootComponent',
})
export class NgxPrimerAccordionRootComponent<T> implements OnInit {
  /**
   * The `idGenerator` is a protected property used to inject an instance of `NgxPrimerIdGeneratorDirective`
   * through Angular's dependency injection system.
   *
   * This generator is used to provide unique ID values for elements within the component or directive.
   * The property is injected with `host: true` and `optional: true`, meaning it will be fetched from the host
   * element (if available), but the property will be `null` if the directive is not found.
   *
   * @protected
   * @property
   * @readonly
   * @type {NgxPrimerIdGeneratorDirective | null}
   * @see IdGenerator
   */
  protected readonly idGenerator = inject(NgxPrimerIdGeneratorDirective, {
    host: true,
    optional: true,
  });

  /**
   * Example of how to use the `idGenerator` to retrieve a unique ID.
   * If the generator is available, it will return a dynamically generated ID.
   * If not, it falls back to a default ID.
   *
   * @protected
   * @property
   * @getter
   * @returns {string} The unique ID or 'default-id' if the generator is not available.
   */
  protected get uniqueId(): string {
    return this.idGenerator?.resolvedId ?? 'ngx-primer-accordion-root';
  }

  /**
   * The `accordionRootId` is a read-only property that holds the unique ID for the root element of the accordion.
   * It leverages the `uniqueId` getter to retrieve a dynamically generated ID from the `idGenerator` or falls back
   * to a default ID if the generator is not available.
   *
   * This ID is useful for setting attributes or accessing the accordion component via its unique identifier.
   *
   * @public
   * @property
   * @readonly
   * @type {string}
   * @see AccordionRootId
   */
  public readonly accordionRootId = this.uniqueId;
  /**
   * Injects the `AccordionRootContext` service into the component or directive.
   *
   * This property provides access to the root context of an accordion,
   * enabling interaction or data sharing between the accordion root
   * and its child components, such as items, triggers, and content.
   *
   *
   * ### Purpose
   * - Facilitates communication between the root and its children.
   * - Allows child components to access shared state or methods provided by the root.
   *
   * @public
   * @property
   * @readonly
   * @type {NgxPrimerAccordionRootContext}
   * @see AccordionRootContext
   */
  public readonly accordionRootContext = inject(NgxPrimerAccordionRootContext, {
    optional: true,
  });

  /**
   * Provides the configuration for the accordion component by injecting the `AccordionConfig` service.
   *
   * The `accordionConfig` property allows access to customizable settings
   * and configurations for the accordion, such as default behaviors, styles,
   * or other shared properties. These configurations can be tailored globally
   * or overridden at specific component levels.
   *
   *
   * ### Purpose
   * - Centralizes the configuration for the accordion component.
   * - Promotes consistency and reusability across multiple accordion instances.
   * - Allows for easy updates and modifications to default settings.
   *
   * @public
   * @property
   * @readonly
   * @type {NgxPrimerAccordionConfig}
   * @see AccordionConfig
   */
  public readonly accordionConfig = injectAccordionConfig();

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
   *
   * ### Behavior:
   * - The `accordionItems` list includes all `NgxPrimerAccordionItemComponent` instances that are within the root accordion, including descendants.
   * - The list is updated dynamically whenever the accordion content changes (e.g., items are added or removed).
   *
   * @public
   * @property
   * @readonly
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
   * @public
   * @property
   * @readonly
   * @type {string} The accordion type, either 'Single' or 'Multiple'.
   */
  public readonly type = model(this.accordionConfig.type, {
    alias: 'ngxPrimerAccordionType',
  });

  /**
   * The collapsible property for the accordion.
   * Determines whether the accordion can collapse or not.
   *
   * @public
   * @property
   * @readonly
   * @type {boolean} True if the accordion is collapsible, false otherwise.
   */
  public readonly collapsible = model<boolean>(
    this.accordionConfig.collapsible,
    {
      alias: 'ngxPrimerAccordionCollapsible',
    }
  );

  /**
   * The currently selected value(s) in the accordion.
   * This represents the values of the open accordion item(s).
   *
   * @public
   * @property
   * @readonly
   * @type {T | T[] | null} The currently selected value(s) or null if no item is selected.
   */
  public readonly value = model<T | T[] | null>(null, {
    alias: 'ngxPrimerAccordionValue',
  });

  /**
   * The default value for the accordion.
   * This is the initial value to be set if no other value is provided.
   *
   * @public
   * @property
   * @readonly
   * @type {T | T[] | null} The default selected value(s).
   */
  public readonly defaultValue = model<T | T[] | null>(null, {
    alias: 'ngxPrimerAccordionDefaultValue',
  });

  /**
   * Whether the accordion is disabled or not.
   * If true, the accordion and its items cannot be interacted with.
   *
   * @public
   * @property
   * @readonly
   * @type {boolean} True if the accordion is disabled, false otherwise.
   */
  public readonly disabled = model<boolean>(false, {
    alias: 'ngxPrimerAccordionDisabled',
  });

  /**
   * The orientation of the accordion (e.g., horizontal or vertical).
   *
   * @public
   * @property
   * @readonly
   * @type {string} The accordion's orientation.
   */
  public readonly orientation = model(this.accordionConfig.orientation, {
    alias: 'ngxPrimerAccordionOrientation',
  });

  /**
   * Checks whether the given value is currently open in the accordion.
   *
   * This method checks the current state of the accordion and determines
   * if the specified value is currently "open" (i.e., selected or expanded).
   * The check behavior differs depending on the accordion type:
   * - For **Multiple** type accordions, it checks if the value is in the list of open values.
   * - For **Single** type accordions, it checks if the given value matches the currently selected value.
   *
   * ### Behavior:
   * - **Multiple Type**: If the accordion type is set to "Multiple", the method checks if the value exists in the list of selected/open values.
   * - **Single Type**: If the accordion type is set to "Single", the method checks if the value matches the currently selected value.
   *
   * @public
   * @method
   * @param {T} value The value to check. This can be any type defined for the accordion values (e.g., string, number, etc.).
   * @returns {boolean} True if the value is open (i.e., selected or expanded), false otherwise.
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
   * ### Behavior:
   * - **Single Accordion Mode**:
   *   - In single-value mode (`type() === 'Single'`), if the value is already open, it will be set to `null` (closed) unless `collapsible` is set to `false`.
   *   - If the value is not open, it will be set as the current value.
   * - **Multi Accordion Mode**:
   *   - If the accordion allows multiple open values (`type() !== 'Single'`), it will toggle the presence of the value in the list of selected values.
   *   - If the value is currently open, it is removed from the list; if it's closed, it is added to the list.
   *
   * @public
   * @method
   * @param {T} value The value to check. This can be any type defined for the accordion values (e.g., string, number, etc.).
   * @returns {void}
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
   * Toggles the state of a single accordion item.
   * If the accordion is not collapsible and the item is being opened, the action is ignored.
   * Otherwise, it updates the internal value to either `null` (if closing) or the provided `value` (if opening).
   *
   * This method is used for managing the single accordion item toggle behavior, ensuring that only one item is open
   * at a time when the accordion is not collapsible.
   *
   * @public
   * @method
   * @param {T} value The value to check. This can be any type defined for the accordion values (e.g., string, number, etc.).
   * @param {boolean} isOpen Indicates whether the accordion item is being opened (`true`) or closed (`false`).
   * @returns {void} This method does not return anything.
   */
  protected toogleSingle(value: T, isOpen: boolean) {
    if (isOpen && !this.collapsible()) return;
    this.value.set(isOpen ? null : value);
  }

  /**
   * Toggles the state of multiple accordion items.
   * If the item is being opened (`isOpenValue = false`), it adds the value to the list of open items.
   * If the item is being closed (`isOpenValue = true`), it removes the value from the list of open items.
   *
   * This method is used for managing multiple accordion items where more than one item can be open at a time.
   * It ensures that the internal value is updated with the correct set of open items,
   * either adding or removing the given `value` based on its current state.
   *
   * @public
   * @method
   * @param {T} value The value to check. This can be any type defined for the accordion values (e.g., string, number, etc.).
   * @param {boolean} isOpenValue Indicates whether the accordion item is being opened (`false`) or closed (`true`).
   * @returns {void} This method does not return anything.
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

  /**
   * Gets the value of the `data-orientation` attribute for the accordion element.
   * This property is bound to the `orientation` property from the accordion configuration,
   * allowing the accordion's orientation to be dynamically set as an attribute on the DOM element.
   *
   * The value of `data-orientation` will reflect the current orientation defined in the accordion configuration,
   * such as `Vertical` or `Horizontal`.
   *
   * @public
   * @method
   * @getter
   * @returns {string} The value of the `orientation` property from the accordion configuration (e.g., 'Vertical' or 'Horizontal').
   */
  @HostBinding('attr.data-orientation')
  public get dataOrientationAttr() {
    return this.accordionConfig.orientation;
  }

  /**
   * Gets the value of the `data-disabled` attribute for the accordion element.
   *
   * This property is bound to the result of the `disabled()` method, which determines whether the
   * accordion is disabled or not. If the accordion is disabled, the `data-disabled` attribute
   * will be added with an empty string value; otherwise, it will be removed (i.e., set to `null`).
   *
   * This is useful for styling or DOM-related behaviors that depend on whether the accordion is
   * disabled or not. It allows external tools or styles to target the accordion element based on
   * its disabled state.
   *
   * @public
   * @method
   * @getter
   * @returns {string | null} An empty string `''` if the accordion is disabled, or `null` if it is not.
   */
  @HostBinding('attr.data-disabled')
  public get dataDisabledAttr() {
    return this.disabled() ? '' : null;
  }

  /**
   * Gets the value of the `data-type` attribute for the accordion element.
   *
   * This property is bound to the result of the `type()` method, which determines the type of
   * the accordion (e.g., `Single` or `Multiple`). The `data-type` attribute is dynamically set
   * on the DOM element, reflecting the current accordion type.
   *
   * This is useful for targeting the accordion element in styles or for other DOM-related
   * behaviors based on its type, allowing different types of accordions to be easily identified
   * and styled differently if needed.
   *
   * @public
   * @getter
   * @returns {string} The value of the accordion's type (e.g., 'Single' or 'Multiple') from the `type()` method.
   */
  @HostBinding('attr.data-type')
  public get dataTypeAttr() {
    return this.type();
  }

  /**
   * Angular initialization hook.
   * Runs the initialization function when the component is initialized.
   *
   * @returns {void} This method does not return anything.
   */
  ngOnInit(): void {
    this.runInitializationFn();
  }

  /**
   * Initializes the accordion component, setting up default values and context.
   *
   * This method sets the default value if provided and assigns the context instance
   * for dependency injection in child components. If a `doneFn` callback is provided,
   * it will be executed after initialization with the current context.
   *
   * @param {function} [doneFn] An optional callback function executed after initialization,
   *   receiving an object with the current `context`.
   * @returns {void}
   */
  protected runInitializationFn(doneFn?: <P>(args?: P) => void): void {
    if (this.defaultValue()) {
      this.value.set(this.defaultValue()); // Set default value if provided.
    }

    if (doneFn) {
      setTimeout(() =>
        doneFn({
          context: this.accordionRootContext,
        })
      );
    }
  }

  /**
   * Moves the focus to the next or previous accordion item based on the given direction.
   *
   * This method calculates the next index of the accordion item based on the current index and the direction,
   * ensuring the focus wraps around if the index goes beyond the bounds of the accordion items list.
   * It then sets focus to the calculated item.
   *
   * @param {number} currentIndex - The index of the currently focused accordion item.
   * @param {number} direction - The direction in which to move the focus. A positive value moves the focus forward,
   *   while a negative value moves the focus backward.
   * @returns {void} This method does not return any value.
   */
  public moveFocus(currentIndex: number, direction: number) {
    const accordionItems = this.accordionItems();
    const nextIndex =
      (currentIndex + direction + accordionItems.length) %
      accordionItems.length;
    accordionItems[nextIndex].focus();
  }

  /**
   * Moves the focus to the last accordion item in the list.
   *
   * This method sets the focus to the last accordion item in the list of accordion items.
   * It ensures that the focus is moved to the final item, regardless of the current focus.
   *
   * @public
   * @method
   * @returns {void} This method does not return any value.
   */
  public moveFocusToEnd() {
    this.accordionItems()[this.accordionItems().length - 1].focus();
  }

  /**
   * Moves the focus to the first accordion item in the list.
   *
   * This method sets the focus to the first accordion item in the list of accordion items.
   * It ensures that the focus is moved to the first item, regardless of the current focus.
   *
   * @public
   * @method
   * @returns {void} This method does not return any value.
   */
  public moveFocusToStart() {
    this.accordionItems()[0].focus();
  }

  /**
   * Expands all accordion items.
   *
   * Calls `toggleAll` with `true` to open all items.
   * Does nothing if the accordion type is "Single".
   *
   * @public
   * @method
   * @returns {void}
   */
  public expandAll() {
    this.toggleAll(true);
  }

  /**
   * Collapses all accordion items.
   *
   * Calls `toggleAll` with `false` to close all items.
   * Does nothing if the accordion type is "Single".
   *
   * @public
   * @method
   * @returns {void}
   */
  public collapseAll() {
    this.toggleAll(false);
  }

  /**
   * Toggles the open/closed state of all accordion items based on the provided `isOpen` value.
   *
   * This method checks whether the accordion is of type "Single" and, if so, returns early without making any changes.
   * Otherwise, it toggles the open/closed state of each accordion item, calling the `toogleMultiple` method
   * on each item, with the inverse of the `isOpen` parameter (`!isOpen`). It also checks whether the accordion item
   * is disabled before toggling its state.
   *
   * @param {boolean} isOpen - A boolean value that specifies whether to open (`true`) or close (`false`)
   *   all accordion items.
   *   - `true`: Expands all accordion items.
   *   - `false`: Collapses all accordion items.
   * @returns {void} This method does not return anything. It only updates the open/closed state of all items.
   */
  private toggleAll(isOpen: boolean) {
    if (this.type() === 'Single' || this.disabled()) return;

    this.accordionItems().forEach(({ disabled, value }) => {
      const isItemDisabled = disabled();
      if (isItemDisabled) return;
      this.toogleMultiple(value(), !isOpen);
    });
  }


  /**
   * Expands the accordion with the given value(s).
   * 
   * If the value is currently collapsed, it will be expanded.
   * If the value is currently expanded, it will remain expanded.
   *
   * @param value - The value or array of values to expand.
   */
  public expand(value: T | T[]) {
    this.toggleValue(value, true);
  }

  /**
   * Collapses the specified value(s) in the accordion.
   * 
   * If the value is currently expanded, it will be collapsed.
   * If the value is currently collapsed, it will remain collapsed.
   *
   * @param value - The value or array of values to collapse.
   */
  public collapse(value: T | T[]) {
    this.toggleValue(value, false);
  }

  
  /**
   * Toggles the expansion state of the given value(s).
   * 
   * If the value is currently collapsed, it will be expanded.
   * If the value is currently expanded, it will be collapsed.
   * 
   * @protected
   * @param {T | T[]} value - The value or array of values to toggle.
   * @param {boolean} isExpanding - A flag indicating whether to expand (true) or collapse (false) the value(s).
   */
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

  /**
   * Enables the specified value(s) by updating their disable state.
   * 
   * If the value is currently disabled, it will be enabled.
   * If the value is currently enabled, it will remain enabled.
   *
   * @public
   * @method
   * @param value - The value or array of values to be enabled.
   */
  public enable(value: T | T[]) {
    this.updateDisableState(value, true);
  }

  /**
   * Disables the specified value(s) by updating their disable state.
   * 
   * If the value is currently enabled, it will be disabled.
   * If the value is currently disabled, it will remain disabled.
   * 
   * @public
   * @method
   * @param value - The value or array of values to be disabled.
   * @returns {void}
   */
  public disable(value: T | T[]) {
    this.updateDisableState(value, false);
  }

  /**
   * Updates the disable state of the specified value(s).
   * 
   * If the value is currently disabled, it will be enabled.
   * If the value is currently enabled, it will be disabled.
   * 
   * @protected
   * @param {T | T[]} value - The value or array of values to update.
   * @param {boolean} enable - A flag indicating whether to enable (true) or disable (false) the value(s).
   */
  protected updateDisableState(value: T | T[], enable: boolean) {
    const values = Array.isArray(value) ? value : [value];
    
    const accordionItems = this.accordionItems().filter((item) => values.includes(item.value()));
  
    const update = (item: NgxPrimerAccordionItemComponent<T>, enable: boolean) => {
      const isDisabled = item.disabled();
      const shouldDisable = !enable;
  
      if (isDisabled !== shouldDisable) {
        item.disabled.set(shouldDisable ? true : false);
      }
    };
  
    accordionItems.forEach((item) => update(item, enable));
  }
}
