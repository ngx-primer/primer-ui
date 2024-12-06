/* eslint-disable @angular-eslint/no-input-rename */
import {
  Directive,
  HostBinding,
  ViewContainerRef,
  computed,
  inject,
  input,
} from '@angular/core';

import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('1234567890abcdef', 10);
const nextIdentifier = nanoid(10);

@Directive({
  selector: '[ngxPrimerIdGenerator]',
  exportAs: 'ngxPrimerIdGenerator',
  standalone: true,
})
export class NgxPrimerIdGeneratorDirective {
  public readonly idAttr = input<string>('', {
    alias: 'ngxPrimerIdAttr',
  });

  protected readonly _uniqueKey = nextIdentifier;

  protected readonly _viewContainerRef = inject(ViewContainerRef);

  protected readonly _element = computed(
    () => this._viewContainerRef.element.nativeElement as HTMLElement
  );
  protected readonly _hostNodeRef = computed(() => ({
    tagName: this._element().tagName,
    localName: this._element().localName,
    originalId: this._element().id,
  }));

  protected readonly _resolvedId = computed(() => {
    const { id, ...parts } = this.resolveHostId();
    return id ?? Object.values(parts).join('-');
  });

  protected resolveHostId() {
    if (this._element().id.length !== 0) {
      return { id: this._element().id };
    }

    const customPrefix = this.idAttr();
    const componentName = this._hostNodeRef().localName;
    const uniquedIdentifierKey = this._uniqueKey;

    return {
      customPrefix,
      componentName,
      uniquedIdentifierKey,
    };
  }

  @HostBinding('attr.id') get resolvedId() {
    return this._resolvedId();
  }
}
