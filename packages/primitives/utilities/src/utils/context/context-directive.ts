import { Directive, OnInit } from '@angular/core';

import { Context } from './context';

@Directive({
  selector: '[ngxPrimerContextDirective]',
  exportAs: 'ngxPrimerContextDirective',
  standalone: true,
})
export abstract class ContextDirective<T = unknown> implements OnInit {
  protected abstract readonly host: T;
  protected abstract readonly context: Context<T>;

  ngOnInit(): void {
    this.context.instance = this.host;
  }

  get instance() {
    return this.context?.instance as T;
  }
}
