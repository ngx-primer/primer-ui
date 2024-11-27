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
import { Component, contentChild, input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgxPrimerAccordionContentComponent } from '../accordion-content/accordion-content.component';
import { NgxPrimerAccordionRootComponent } from '../accordion-root/accordion-root.component';
import { NgxPrimerAccordionTriggerComponent } from '../accordion-trigger/accordion-trigger.component';

@Component({
  selector: 'ngx-primer-accordion-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.scss',
  exportAs: 'ngxPrimerAccordionItemComponent',
})
export class NgxPrimerAccordionItemComponent<T> {
  /**
   * Accordion root instance.
   */
  public readonly accordionRoot = input.required<
    NgxPrimerAccordionRootComponent<T>
  >({
    alias: 'ngxPrimerAccordionRootInstanceRef',
  });

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
}
