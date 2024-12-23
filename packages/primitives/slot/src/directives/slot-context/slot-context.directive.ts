import { Directive, input } from '@angular/core';

export interface SlotContext<T> {
  $implicit: T;
}

@Directive({
  selector: 'ng-template[ngxSlotContext]',
  standalone: true,
})
export class SlotContextDirective<T> {
  public readonly context = input<T>();
  static ngTemplateContextGuard<TContext>(
    dir: SlotContextDirective<TContext>,
    ctx: unknown,
  ): ctx is SlotContext<TContext> {
    return true;
  }
}
