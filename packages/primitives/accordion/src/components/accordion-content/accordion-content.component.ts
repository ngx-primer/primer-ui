import { Component, OnInit, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgxPrimerAccordionContentContext } from '../../contexts/accordion-content/accordion-content.context';
import { NgxPrimerAccordionItemContext } from '../../contexts/accordion-item/accordion-item.context';

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


@Component({
  selector: 'ngx-primer-accordion-content',
  standalone: true,
  imports: [CommonModule],
  providers: [
    NgxPrimerAccordionContentContext
  ],
  templateUrl: './accordion-content.component.html',
  styleUrl: './accordion-content.component.scss',
})
export class NgxPrimerAccordionContentComponent<T> implements OnInit {
  protected readonly accordionItemContext = inject(NgxPrimerAccordionItemContext, {
    optional: true,
  });
  protected readonly accordionContentContext = inject(NgxPrimerAccordionContentContext, {
    optional: true
  });
  ngOnInit(): void {
    this.runInitializationFn()
  }
  protected runInitializationFn(doneFn?: <P>(args?: P) => void): void {
    // set the context instance to allow inject in child component prevent manual prop drilling
    if(this.accordionContentContext){
      this.accordionContentContext.instance = this;
    }

    if (doneFn) {
      doneFn({
        context: this.accordionContentContext?.instance as NgxPrimerAccordionContentComponent<T>,
      });
    }
  }
}
