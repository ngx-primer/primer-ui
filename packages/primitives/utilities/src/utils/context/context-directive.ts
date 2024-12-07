import { Context } from './context';
import { Directive } from '@angular/core';

@Directive({
  selector: '[ngxPrimerContextDirective]',
  exportAs: 'ngxPrimerContextDirective',
  standalone: true,
})
export abstract class ContextDirective<T = unknown> {
  protected abstract readonly host: T;
  protected abstract readonly context: Context<T>;
}
