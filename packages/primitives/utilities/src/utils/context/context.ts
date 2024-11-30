import { Component, Injectable, signal } from '@angular/core';

@Injectable()
export abstract class Context<T extends Component> {
  private _instance = signal<T | null>(null);

  set instance(instance: T) {
    this._instance.set(instance);
  }

  get instance(): T | null {
    return this._instance() as T;
  }
}
