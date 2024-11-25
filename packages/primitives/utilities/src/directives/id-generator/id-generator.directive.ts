/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Directive, ElementRef, HostBinding, OnInit, ViewContainerRef, inject, input } from '@angular/core';

import { nanoid } from 'nanoid'

const counters: Map<string, Record<string, number>> = new Map()

@Directive({
  selector:'[ngxPrimerIdGenerator]',
  exportAs: 'ngxPrimerIdGenerator',
  standalone: true,
})
export class NgxPrimerIdGeneratorDirective implements OnInit {
  /**
   * The custom id provided by external.
   * 
   */
  public readonly id = input('', {
    alias: 'ngxPrimerId'
  });

  /**
   * Access the current eleemnt ref instances.
   */
  private readonly elementRef = inject(ElementRef);

  /**
   * The view container ref instance.
   */
  private readonly viewContainerRef = inject(ViewContainerRef);
  
  /**
   * Host component.
   */
  public hostComponent: unknown | null = null;

  @HostBinding('attr.id')
  public resolvedId!: string;

  protected sanitizeId(value: string) {
    return value
      .replace(/[^a-zA-Z0-9-_\\.]/g, '-')
      .toLowerCase();
  }

  ngOnInit(): void {
    this.hostComponent = this.getHostElementFromViewContainerRef();
    
    const componentName = (this.hostComponent?.constructor.name ?? 'ngx-primer-component').toLowerCase() as string;
    const tagName = this.elementRef.nativeElement.tagName.toLowerCase();

    console.log(componentName);

    if (!counters.has(componentName)) {
      counters.set(componentName, {});
    }
    const tagCounters = counters.get(componentName)!;

    if (!tagCounters[tagName]) {
      tagCounters[tagName] = 0;
    }

    const sanitizedComponentName = this.sanitizeId(componentName);
    const sanitizedTagName = this.sanitizeId(tagName);
    
    if (this.id) {
      this.resolvedId = `${sanitizedComponentName}-${this.sanitizeId(this.id())}-${tagCounters[tagName]}-${nanoid()}`;
    } else {
      this.resolvedId = `${sanitizedComponentName}-${sanitizedTagName}-${tagCounters[tagName]}-${nanoid()}`;
      tagCounters[tagName]++;
    }
  }

  /**
   * Method for getting name of component behind attched  this directive.
   * 
   * https://stackoverflow.com/questions/46014761/how-to-access-host-component-from-directive.
   * 
   * 
   * @returns ContextElement | null
   */
  private getHostElementFromViewContainerRef(): unknown | null {
    // TL;DR of the below method:
    // return this.vcRef._lContainer[0][8];
    // Inspired by https://stackoverflow.com/questions/46014761/how-to-access-host-component-from-directive#comment119646192_48563965

    const vcRef = this.viewContainerRef as any// We're accessing private properties so we cast to any to avoid awkward TS validation issues

    // We fetch the component associated with the element this directive is attached to by navigating via the ViewContainerRef.
    // The VCRef contains a reference to the LContainer, which represents the state associated with the container:
    // https://github.com/angular/angular/blob/12.2.x/packages/core/src/render3/interfaces/container.ts#L65
    const lContainer = vcRef._lContainer;

    if (!lContainer) {
      return null;
    }

    // LView has all its elements defined as array elements, with keys hardcoded to numeric constants:
    // https://github.com/angular/angular/blob/12.2.x/packages/core/src/render3/interfaces/view.ts#L26-L57
    // We care about two of them:
    const HOST = 0; // https://github.com/angular/angular/blob/12.2.x/packages/core/src/render3/interfaces/view.ts#L29
    const CONTEXT = 8; // https://github.com/angular/angular/blob/12.2.x/packages/core/src/render3/interfaces/view.ts#L37

    // LContainer is an array, with the element at the HOST position being an LView if the container is on a Component Node.
    // This means that this may not work if this directive is declared on a native HTML element.
    // Note that LContainer uses the same indexes as LView, so it's the same HOST constant as declared in the LView interfaces file.
    // https://github.com/angular/angular/blob/12.2.x/packages/core/src/render3/interfaces/container.ts#L66-L72

    const lView = lContainer[HOST];
    if (!lView) {
      return null;
    }

    // For a non-root component, the context is the component instance.
    // So if this directive is correctly attached to an Angular Component (e.g. `<app-*`),
    // this array entry will contain the instance of that component.
    // https://github.com/angular/angular/blob/12.2.x/packages/core/src/render3/interfaces/view.ts#L173-L180
    const contextElement = lView[CONTEXT];

    return contextElement || null;
  }
}
