import { Injectable, signal } from '@angular/core';

@Injectable()
export abstract class Context<T = unknown> {
  private _instance = signal<T | null>(null);

  set instance(instance: T) {
    this._instance.set(instance);
  }

  get instance(): T | null {
    return this._instance() as ReturnType<typeof this._instance>;
  }
}
