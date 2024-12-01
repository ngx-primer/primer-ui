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

import { Component, HostBinding, OnInit, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgxPrimerAccordionContentContext } from '../../contexts/accordion-content/accordion-content.context';
import { NgxPrimerAccordionItemComponent } from '../accordion-item/accordion-item.component';
import { NgxPrimerAccordionItemContext } from '../../contexts/accordion-item/accordion-item.context';
import { NgxPrimerAccordionRootComponent } from '../accordion-root/accordion-root.component';
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('1234567890abcdef', 10);
let nextCounter = 0;
const nextIdentifier = nanoid(10);

@Component({
  selector: 'ngx-primer-accordion-content',
  standalone: true,
  imports: [CommonModule],
  providers: [NgxPrimerAccordionContentContext],
  templateUrl: './accordion-content.component.html',
  styleUrl: './accordion-content.component.scss',
})
export class NgxPrimerAccordionContentComponent<T> implements OnInit {
  protected id =
    `ngx-primer-accordion-content-${nextCounter++}-${nextIdentifier}` as const;
  protected readonly accordionItemContext = inject(
    NgxPrimerAccordionItemContext,
    {
      optional: true,
    }
  );

  protected readonly accordionContentContext = inject(
    NgxPrimerAccordionContentContext,
    {
      optional: true,
    }
  );

  @HostBinding('attr.id')
  public get accordionContentId() {
    return this.id;
  }

  @HostBinding('role')
  public get roleAttr() {
    return 'region';
  }

  @HostBinding('attr.data-orientation')
  public get dataOrientationAttr() {
    return this.accordionRoot.orientation();
  }

  @HostBinding('attr.data-expanded')
  public get dataExpandedAttr() {
    return this.accordionItem.isOpen();
  }

  @HostBinding('attr.data-is-open')
  public get dataIsOpenAttr() {
    return this.accordionItem.isOpen();
  }

  @HostBinding('attr.aria-labelledby')
  public get dataAriaLabelledByAttr() {
    return this.accordionItem.accordionTrigger()?.accordionTriggerId;
  }

  ngOnInit(): void {
    this.runInitializationFn();
  }

  protected runInitializationFn(doneFn?: <P>(args?: P) => void): void {
    // set the context instance to allow inject in child component prevent manual prop drilling
    if (this.accordionContentContext) {
      this.accordionContentContext.instance = this;
    }

    if (doneFn) {
      doneFn({
        context: this.accordionContentContext
          ?.instance as NgxPrimerAccordionContentComponent<T>,
      });
    }
  }

  protected get accordionContent() {
    return this.accordionContentContext
      ?.instance as NgxPrimerAccordionContentComponent<T>;
  }

  protected get accordionItem() {
    return this.accordionItemContext
      ?.instance as NgxPrimerAccordionItemComponent<T>;
  }

  protected get accordionRoot() {
    return this.accordionItem?.accordionRootContext
      ?.instance as NgxPrimerAccordionRootComponent<T>;
  }
}
