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
      directive: NgxPrimerAccordionTriggerContextDirective
    }
  ],
})
export class NgxPrimerAccordionTriggerComponent<T> implements OnInit {
  protected readonly platformId = inject(PLATFORM_ID);
  protected readonly viewContainerRef = inject(ViewContainerRef);
  protected readonly idGenerator = inject(NgxPrimerIdGeneratorDirective, {
    host: true,
    optional: true,
  });

  public readonly accordionTriggerId = this.idGenerator?.resolvedId;

  protected readonly accordionItemContext = inject(
    NgxPrimerAccordionItemContext,
    {
      optional: true,
    }
  );

  protected readonly accordionTriggerContext = inject(
    NgxPrimerAccordionTriggerContext,
    {
      optional: true,
    }
  );

  ngOnInit(): void {
    this.runInitializationFn((x) => {
      if(x) {
        console.log(x)
      }
    });
  }

  protected runInitializationFn(doneFn?: <P>(args?: P) => void): void {
    if (doneFn) {
      setTimeout(() => doneFn({
        context: this.accordionTriggerContext
      }));
    }
  }

  @HostListener('click')
  toogle() {
    if (this.accordionRoot?.disabled()) return;
    this.accordionRoot?.toggle(this.accordionItem?.value());
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
    return isPlatformBrowser(this.platformId) ? document.activeElement === this.viewContainerRef.element.nativeElement : false;
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
  onKeyDown(event: KeyboardEvent) {
    const currentIndex = this.accordionRoot.accordionItems().findIndex((item: NgxPrimerAccordionItemComponent<T>) => item.accordionTrigger() === this);

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

  protected get accordionItem() {
    return this.accordionItemContext
      ?.instance as NgxPrimerAccordionItemComponent<T>;
  }

  protected get accordionRoot() {
    return this.accordionItem?.accordionRootContext
      ?.instance as NgxPrimerAccordionRootComponent<T>;
  }
  
  protected get accordionContent() {
    return this.accordionItem?.accordionItemContext?.instance as NgxPrimerAccordionContentComponent<T>;
  }

  focus() {
    (this.viewContainerRef.element.nativeElement as HTMLElement).focus({
      preventScroll: false
    })
  }
}
