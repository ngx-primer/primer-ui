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
import { Component, OnInit, inject } from '@angular/core';
import { NgxPrimerAccordionItemContext, NgxPrimerAccordionTriggerContext } from '../../contexts';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngx-primer-accordion-trigger',
  standalone: true,
  imports: [CommonModule],
  providers:[
    NgxPrimerAccordionTriggerContext
  ],
  templateUrl: './accordion-trigger.component.html',
  styleUrl: './accordion-trigger.component.scss',
})
export class NgxPrimerAccordionTriggerComponent<T> implements OnInit {
  protected readonly accordionItemContext = inject(NgxPrimerAccordionItemContext);
  protected readonly accordionTriggerContext = inject(NgxPrimerAccordionTriggerContext);
  ngOnInit(): void {
    this.runInitializationFn()
  }
  protected runInitializationFn(doneFn?: <P>(args?: P) => void): void {
    // set the context instance to allow inject in child component prevent manual prop drilling
    this.accordionTriggerContext.instance = this;

    if (doneFn) {
      doneFn({
        context: this.accordionTriggerContext
          .instance as NgxPrimerAccordionTriggerComponent<T>,
      });
    }
  }
}
