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
  inject,
} from '@angular/core';
import {
  NgxPrimerAccordionItemContext,
  NgxPrimerAccordionTriggerContext,
} from '../../contexts';

import { CommonModule } from '@angular/common';
import { NgxPrimerAccordionItemComponent } from '../accordion-item/accordion-item.component';
import { NgxPrimerAccordionRootComponent } from '../accordion-root/accordion-root.component';
import {
  NgxPrimerIdGeneratorDirective,
} from '@ngx-primer/primitive/utilities';

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
  ],
})
export class NgxPrimerAccordionTriggerComponent<T> implements OnInit {
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
    this.runInitializationFn();
  }

  protected runInitializationFn(doneFn?: <P>(args?: P) => void): void {
    // set the context instance to allow inject in child component prevent manual prop drilling
    if (this.accordionTriggerContext) {
      this.accordionTriggerContext.instance = this;
    }

    if (doneFn) {
      doneFn({
        context: this.accordionTriggerContext
          ?.instance as NgxPrimerAccordionTriggerComponent<T>,
      });
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

  @HostBinding('attr.data-orientation')
  public get dataOrientationAttr() {
    return this.accordionRoot?.orientation();
  }

  @HostBinding('attr.data-is-open')
  public get dataIsOpenAttr() {
    return this.accordionItem.isOpen();
  }

  @HostBinding('attr.data-expanded')
  public get dataExpandedAttr() {
    return this.accordionItem.isOpen();
  }

  @HostBinding('attr.aria-controls')
  public get dataControlsAttr() {
    return this.accordionItem.accordionContent()?.accordionContentId;
  }

  protected get accordionItem() {
    return this.accordionItemContext
      ?.instance as NgxPrimerAccordionItemComponent<T>;
  }

  protected get accordionRoot() {
    return this.accordionItem.accordionRootContext
      ?.instance as NgxPrimerAccordionRootComponent<T>;
  }
}
