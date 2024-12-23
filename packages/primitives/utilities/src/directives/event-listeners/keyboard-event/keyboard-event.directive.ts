/* eslint-disable @angular-eslint/no-input-rename */
import { Directive, HostListener, input } from '@angular/core';

@Directive({
  selector: '[ngxPrimerKeyboardEventDirective]',
  exportAs: 'ngxPrimerKeyboardEventDirective',
  standalone: true,
})
export class NgxPrimerKeyboardEventDirective {
  public readonly onKeyUp = input<((event: KeyboardEvent) => void) | null>(
    null,
    {
      alias: 'ngxPrimerOnKeyUpEvent',
    },
  );

  public readonly onKeyDown = input<((event: KeyboardEvent) => void) | null>(
    null,
    {
      alias: 'ngxPrimerOnKeyDownEvent',
    },
  );

  public readonly onKeyPress = input<((event: KeyboardEvent) => void) | null>(
    null,
    {
      alias: 'ngxPrimerOnKeyPressEvent',
    },
  );

  @HostListener('keyup', ['$event']) handleOnKeyUpListener(
    event: KeyboardEvent,
  ) {
    if (this.onKeyUp()) {
      const onKeyUpFn = this.onKeyUp() as unknown as (
        event: KeyboardEvent,
      ) => void;
      onKeyUpFn(event);
    }
  }

  @HostListener('keydown', ['$event']) handleOnKeyDownListener(
    event: KeyboardEvent,
  ) {
    if (this.onKeyDown()) {
      const onKeyDown = this.onKeyDown() as unknown as (
        event: KeyboardEvent,
      ) => void;
      onKeyDown(event);
    }
  }

  @HostListener('keypress', ['$event']) handleOnKeyPressListener(
    event: KeyboardEvent,
  ) {
    if (this.onKeyPress()) {
      const onKeyPress = this.onKeyPress() as unknown as (
        event: KeyboardEvent,
      ) => void;
      onKeyPress(event);
    }
  }
}
