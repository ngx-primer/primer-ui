import { CommonModule, isPlatformBrowser } from '@angular/common';
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
  HostListener,
  OnInit,
  PLATFORM_ID,
  ViewContainerRef,
  inject,
} from '@angular/core';
import {
  NgxPrimerAccordionItemContext,
  NgxPrimerAccordionTriggerContext,
} from '../../contexts';

import { NgxPrimerAccordionContentComponent } from '../accordion-content/accordion-content.component';
import { NgxPrimerAccordionItemComponent } from '../accordion-item/accordion-item.component';
import { NgxPrimerAccordionRootComponent } from '../accordion-root/accordion-root.component';
import { NgxPrimerAccordionTriggerContextDirective } from '../../directives';
import { NgxPrimerIdGeneratorDirective } from '@ngx-primer/primitive/utilities';

/**
 * Represents the accordion trigger component in the `ngx-primer` accordion library.
 * This component is responsible for handling the user interaction (click, keydown events) with the accordion trigger.
 * It interacts with other accordion components like items and content, and supports dynamic accessibility attributes.
 *
 * @public
 * @component
 */
@Component({
  selector: 'ngx-primer-accordion-trigger',
  standalone: true,
  imports: [CommonModule],
  providers: [NgxPrimerAccordionTriggerContext],
  templateUrl: './accordion-trigger.component.html',
  styleUrl: './accordion-trigger.component.scss',
  hostDirectives: [
    {
      directive: NgxPrimerIdGeneratorDirective,
      inputs: ['ngxPrimerIdAttr'],
    },
    {
      directive: NgxPrimerAccordionTriggerContextDirective,
    },
  ],
})
export class NgxPrimerAccordionTriggerComponent<T> implements OnInit {
  /**
   * Injects the PLATFORM_ID token, which provides information about the current platform (e.g., browser or server).
   * This is used to determine platform-specific behaviors, such as rendering and handling platform-specific logic
   * (e.g., browser-only operations).
   *
   * The `platformId` is typically used in combination with Angular's `isPlatformBrowser` and `isPlatformServer` utility functions
   * to handle platform-specific behavior at runtime.
   *
   * @protected
   * @property
   * @readonly
   * @type {Object}
   * @see https://angular.io/api/core/PLATFORM_ID
   */
  protected readonly platformId = inject(PLATFORM_ID);

  /**
   * Injects the `ViewContainerRef` service, which provides a reference to the container where views (such as components or templates) are dynamically inserted.
   *
   * The `viewContainerRef` allows manipulation of views within the component, such as adding or removing dynamic components,
   * managing the view lifecycle, and working with embedded views.
   * It is commonly used in scenarios where you need to programmatically insert or manage content within the DOM.
   *
   * @protected
   * @property
   * @readonly
   * @type {ViewContainerRef}
   * @see https://angular.io/api/core/ViewContainerRef
   */
  protected readonly viewContainerRef = inject(ViewContainerRef);

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
   * @host
   * @optional
   * @type {NgxPrimerIdGeneratorDirective | null}
   * @see IdGenerator
   */
  protected readonly idGenerator = inject(NgxPrimerIdGeneratorDirective, {
    host: true,
    optional: true,
  });

  /**
   * Retrieves the unique identifier for the accordion component.
   *
   * This getter returns the resolved ID generated by the `idGenerator` directive, or a default value of `'ngx-primer-accordion-trigger'`
   * if the generator is not available. It ensures that each instance of the accordion component has a unique ID for accessibility,
   * DOM interaction, and other purposes requiring a unique reference.
   *
   * @protected
   * @property
   * @getter
   * @returns {string} The unique identifier for the accordion component.
   */
  protected get uniqueId(): string {
    return this.idGenerator?.resolvedId ?? 'ngx-primer-accordion-trigger';
  }

  /**
   * The unique identifier for the accordion trigger element.
   *
   * This property assigns the unique ID of the accordion root component to the trigger element.
   * It uses the `uniqueId` getter to fetch the ID, ensuring that the trigger element is correctly
   * associated with its corresponding accordion root in the DOM. This ID is important for accessibility
   * purposes and ensuring unique identification for interactions with the accordion trigger.
   *
   * @public
   * @property
   * @readonly
   * @returns {string} The unique ID for the accordion trigger, derived from the accordion root's unique ID.
   */
  public readonly accordionTriggerId = this.uniqueId;

  /**
   * The context for the accordion item, injected optionally from the parent component.
   *
   * This property holds the context instance for the accordion item, which contains
   * relevant information and methods related to the accordion item. The context is injected
   * optionally, meaning that it may not always be present depending on the component's setup.
   * The context provides access to properties like the state of the accordion item (open/closed),
   * its content, and other relevant configurations specific to the accordion item.
   *
   * @public
   * @readonly
   * @optional
   * @type {NgxPrimerAccordionItemContext | undefined} The accordion item context instance, or `undefined` if not available.
   */
  public readonly accordionItemContext = inject(NgxPrimerAccordionItemContext, {
    optional: true,
  });

  /**
   * The context for the accordion trigger, injected optionally from the parent component.
   *
   * This property holds the context instance for the accordion trigger, which contains
   * relevant information and methods related to the accordion trigger. The context is injected
   * optionally, meaning that it may not always be present depending on the component's setup.
   * The context provides access to properties such as the state of the trigger, its behavior,
   * and any other configurations specific to the accordion trigger.
   *
   * @public
   * @readonly
   * @optional
   * @type {NgxPrimerAccordionTriggerContext | undefined} The accordion trigger context instance, or `undefined` if not available.
   */
  public readonly accordionTriggerContext = inject(
    NgxPrimerAccordionTriggerContext,
    {
      optional: true,
    }
  );

  /**
   * Lifecycle hook that is called after the component has been initialized.
   *
   * This method is executed when the Angular component is initialized, and it triggers the
   * `runInitializationFn` method to perform any necessary setup or initialization tasks for
   * the accordion trigger component.
   *
   * The `ngOnInit` lifecycle hook ensures that the initialization logic runs at the appropriate
   * time in the component's lifecycle, after all the component's dependencies have been injected
   * and the component's input properties have been set.
   *
   * @public
   * @method
   * @returns {void} This method does not return anything.
   */
  ngOnInit(): void {
    this.runInitializationFn();
  }

  /**
   * Runs the initialization logic for the accordion trigger component, optionally executing a callback after initialization.
   *
   * This method performs setup tasks for the accordion trigger, and if a callback function (`doneFn`) is provided,
   * it is executed after the initialization logic is complete. The callback receives an object containing the
   * `context` of the accordion trigger component.
   *
   * The method ensures that the initialization process is executed asynchronously using `setTimeout`, allowing
   * for the callback to run after the component's setup has finished.
   *
   * ### Parameters
   * - `doneFn` (Optional): A callback function that will be invoked after the initialization is complete.
   *   It receives an object with the following properties:
   *   - `context`: The context of the accordion trigger component, which can be used in child components for dependency injection.
   *
   * ### Returns
   * This method does not return anything. It performs initialization tasks and optionally calls the provided callback.
   *
   * @public
   * @method
   * @param {Function} [doneFn] An optional callback function to execute after initialization.
   * @returns {void} This method does not return anything.
   */
  protected runInitializationFn(doneFn?: <P>(args?: P) => void): void {
    if (doneFn) {
      setTimeout(() =>
        doneFn({
          context: this.accordionTriggerContext,
        })
      );
    }
  }

  @HostListener('click')
  toogle() {
    if (this.accordionRoot?.disabled() || this.accordionItem?.disabled()) return;
    this.accordionRoot?.toggle(this.accordionItem?.value() as T);
  }

  @HostBinding('role')
  public get roleAttr() {
    return 'button';
  }

  @HostBinding('tabIndex')
  public get tabIndexAttr() {
    return this.accordionItem.isOpen() ? 0 : -1;
  }

  @HostBinding('attr.data-focus')
  public get dataFocusAttr() {
    return isPlatformBrowser(this.platformId)
      ? document.activeElement === this.viewContainerRef.element.nativeElement
      : false;
  }

  @HostBinding('attr.data-orientation')
  public get dataOrientationAttr() {
    return this.accordionRoot?.orientation();
  }

  @HostBinding('attr.data-is-open')
  public get dataIsOpenAttr() {
    return this.accordionItem?.isOpen();
  }

  @HostBinding('attr.data-expanded')
  public get dataExpandedAttr() {
    return this.accordionItem?.isOpen();
  }

  @HostBinding('attr.aria-controls')
  public get dataControlsAttr() {
    return this.accordionItem?.accordionContent()?.accordionContentId;
  }

  @HostListener('keydown', ['$event'])
  public onKeyDown(event: KeyboardEvent) {
    const currentIndex = this.accordionRoot
      .accordionItems()
      .findIndex(
        (item: NgxPrimerAccordionItemComponent<T>) =>
          item.accordionTrigger() === this
      );

    switch (event.key) {
      case 'Enter':
      case ' ':
        this.toogle();
        event.preventDefault();
        break;
      case 'ArrowDown':
        this.accordionRoot.moveFocus(currentIndex, 1);
        event.preventDefault();
        break;
      case 'ArrowUp':
        this.accordionRoot.moveFocus(currentIndex, -1);
        event.preventDefault();
        break;
      case 'Home':
        this.accordionRoot.moveFocusToStart();
        event.preventDefault();
        break;
      case 'End':
        this.accordionRoot.moveFocusToEnd();
        event.preventDefault();
        break;
    }
  }

  public get accordionItem() {
    return this.accordionItemContext
      ?.instance as NgxPrimerAccordionItemComponent<T>;
  }

  public get accordionRoot() {
    return this.accordionItem?.accordionRootContext
      ?.instance as NgxPrimerAccordionRootComponent<T>;
  }

  public get accordionContent() {
    return this.accordionItem?.accordionItemContext
      ?.instance as NgxPrimerAccordionContentComponent<T>;
  }

  focus() {
    if(this.accordionRoot?.disabled() || this.accordionItem?.disabled()) return;
    (this.viewContainerRef.element.nativeElement as HTMLElement).focus({
      preventScroll: false,
    });
  }
}
