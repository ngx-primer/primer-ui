import { Component } from '@angular/core';
import { useAccordionRootContext } from '../provider/accordion-root.provider';

const {
  injectAccordionConfig
} = useAccordionRootContext();

@Component({
  selector: 'lib-ngx-accordion-root',
  standalone: true,
  imports: [
    
  ],
  templateUrl: './ngx-accordion-root.component.html',
  styleUrl: './ngx-accordion-root.component.scss',
  providers: [
  ]
})
export class NgxAccordionRootComponent {
  protected readonly config = injectAccordionConfig();
  constructor() {
    console.log(this.config)
  }
}
