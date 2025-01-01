import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  HostBinding,
  HostListener,
  OnInit,
  PLATFORM_ID,
  ViewContainerRef,
  inject,
} from '@angular/core';

import { NgxPrimerAccordionItemComponent } from '../accordion-item/accordion-item.component';
import { NgxPrimerIdGeneratorDirective } from '@ngx-primer/utilities';

@Component({
  selector: 'ngx-primer-accordion-trigger',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion-trigger.component.html',
  styleUrl: './accordion-trigger.component.scss',
  hostDirectives: [
    {
      directive: NgxPrimerIdGeneratorDirective,
      inputs: ['ngxPrimerIdAttr'],
    },
  ],
})
export class NgxPrimerAccordionTriggerComponent<T> implements OnInit {
  /**
   * Platform id.
   * 
   * @default PLATFORM_ID
   */
  protected readonly platformId = inject(PLATFORM_ID);

  /**
   * View container reference.
   * 
   * @default ViewContainerRef
   */
  protected readonly viewContainerRef = inject(ViewContainerRef);
  
  /**
   * Id generator for the accordion trigger.
   * 
   * @default NgxPrimerIdGeneratorDirective
   */
  protected readonly idGenerator = inject(NgxPrimerIdGeneratorDirective, {
    host: true,
    optional: true,
  });

  /**
   * Unique id for the accordion trigger.
   * 
   * @default 'ngx-primer-accordion-trigger'
   */
  protected get uniqueId(): string {
    return this.idGenerator?.resolvedId ?? 'ngx-primer-accordion-trigger';
  }

  /**
   * Id for the accordion trigger.
   * 
   * @default this.uniqueId
   */
  public readonly accordionTriggerId = this.uniqueId;

  /**
   * Accordion item context.
   * 
   * @default NgxPrimerAccordionItemComponent
   */
  public readonly accordionItemContext = inject(
    NgxPrimerAccordionItemComponent,
    {
      host: true,
      optional: true,
    },
  );

  /**
   * Accordion item component.
   * 
   * @default NgxPrimerAccordionItemComponent
   */
  public get accordionItem() {
    return this.accordionItemContext;
  }

  /**
   * Accordion root component.
   * 
   * @default NgxPrimerAccordionRootComponent
   */
  public get accordionRoot() {
    return this.accordionItem?.accordionRoot;
  }

  /**
   * Accordion content component.
   * 
   * @default NgxPrimerAccordionContentComponent
   */
  public get accordionContent() {
    return this.accordionItem?.accordionContent;
  }

  /**
   * Focuses the accordion trigger.
   */
  public focus(): void {
    if (this.accordionRoot?.disabled() || this.accordionItem?.disabled())
      return;
    (this.viewContainerRef.element.nativeElement as HTMLElement).focus({
      preventScroll:
        this.accordionRoot?.accordionConfig?.preventScrolling ?? false,
    });
  }

  /**
   * Binds click events to accordion trigger event and dispatch event handlers.
   */
  @HostListener('click')
  public toogle() {
    if (this.accordionRoot?.disabled() || this.accordionItem?.disabled())
      return;
    this.accordionRoot?.toggle(this.accordionItem?.value() as T);
  }

  /**
   * Binds role attribute value.
   */
  @HostBinding('role')
  public get roleAttr() {
    return 'button';
  }

  /**
   * Binds tabIndex attribute value.
   */
  @HostBinding('tabIndex')
  public get tabIndexAttr() {
    return this.accordionItem?.isOpen() ? 0 : -1;
  }

  /**
   * Binds data-focus attribute value.
   */
  @HostBinding('attr.data-focus')
  public get dataFocusAttr() {
    return isPlatformBrowser(this.platformId)
      ? document.activeElement === this.viewContainerRef.element.nativeElement
      : false;
  }

  /**
   * Binds data-orientation attribute value.
   */
  @HostBinding('attr.data-orientation')
  public get dataOrientationAttr() {
    return this.accordionRoot?.orientation();
  }

  /**
   * Binds data-is-open attribute value.
   */
  @HostBinding('attr.data-is-open')
  public get dataIsOpenAttr() {
    return this.accordionItem?.isOpen();
  }

  /**
   * Binds data-expanded attribute value.
   */
  @HostBinding('attr.data-expanded')
  public get dataExpandedAttr() {
    return this.accordionItem?.isOpen();
  }

  /**
   * Binds aria-controls attribute value.
   */
  @HostBinding('attr.aria-controls')
  public get dataControlsAttr() {
    return this.accordionItem?.accordionContent?.accordionContentId;
  }

  /**
   * Binds keydown events to accordion trigger event and dispatch event handlers.
   * 
   * @param event 
   * @see https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-22
   */
  @HostListener('keydown', ['$event'])
  public onKeyDown(event: KeyboardEvent) : void {
    const currentIndex = this.accordionRoot?.accordionItems.findIndex(
      (item: NgxPrimerAccordionItemComponent<T>) =>
        item?.accordionTrigger === this,
    ) as number;

    switch (event.key) {
      case 'Enter':
      case ' ':
        this.toogle();
        event.preventDefault();
        break;
      case 'ArrowDown':
        this.accordionRoot?.moveFocus(currentIndex, 1);
        event.preventDefault();
        break;
      case 'ArrowUp':
        this.accordionRoot?.moveFocus(currentIndex, -1);
        event.preventDefault();
        break;
      case 'Home':
        this.accordionRoot?.moveFocusToStart();
        event.preventDefault();
        break;
      case 'End':
        this.accordionRoot?.moveFocusToEnd();
        event.preventDefault();
        break;
    }
  }
  
  ngOnInit(): void {
    this.runInitializationFn();
  }

  protected runInitializationFn(doneFn?: <P>(args?: P) => void): void {
    if (doneFn) {
      setTimeout(() =>
        doneFn({
          context: this,
        }),
      );
    }
  }
}
