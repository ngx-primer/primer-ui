/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Directive, ElementRef, HostBinding, OnInit, ViewContainerRef, inject, input } from '@angular/core';

import { IdGeneratorConfig } from '../../providers/id-generator/id-generator.provider';
import { nanoid } from 'nanoid';

// Map to track counters for each component and tag
const COMPONENT_COUNTERS: Map<string, Record<string, number>> = new Map();

@Directive({
  selector: '[ngxPrimerIdGenerator]',
  exportAs: 'ngxPrimerIdGenerator',
  standalone: true,
})
export class NgxPrimerIdGeneratorDirective implements OnInit {
  private _config!: IdGeneratorConfig;

  /**
   * User-provided custom ID, if any.
   * This ID will be used if provided, otherwise, a default ID will be generated.
   */
  public readonly customId = input('', {
    alias: 'ngxPrimerId',
  });

  /**
   * Access to the element reference.
   * Injected to provide direct interaction with the DOM element.
   */
  private readonly elementRef = inject(ElementRef);

  /**
   * Access to the view container reference.
   * This allows interaction with the container where the directive is applied.
   */
  private readonly viewContainerRef = inject(ViewContainerRef);

  /**
   * The host component instance, if available.
   * Will be used to resolve the component's selector for ID generation.
   */
  public hostComponent: unknown | null = null;

  @HostBinding('attr.id')
  public generatedId!: string;

  /**
   * Set configuration options.
   * Merges the provided config with the current settings.
   */
  set config(config: Partial<IdGeneratorConfig>) {
    this._config = { ...this._config, ...config };
  }

  /**
   * On initialization, generates and assigns a unique ID to the element.
   * The ID is composed of a sanitized component name, tag name, and a unique counter.
   */
  ngOnInit(): void {
    // Get the component's selector if available
    this.hostComponent = this.getComponentSelector();
    const componentName = (this.hostComponent ?? 'ngx-primer-component') as string;
    const tagName = this.elementRef.nativeElement.tagName.toLowerCase();

    // Initialize counters for components and tags
    this.initializeComponentCounters(componentName, tagName);

    // Sanitize the component and tag names for a valid ID format
    const sanitizedComponent = this.sanitize(componentName as string);
    const sanitizedTag = this.sanitize(tagName);

    // Generate a unique ID for the component
    this.generatedId = this.customId
      ? `${sanitizedComponent}-${this.sanitize(this.customId())}-${COMPONENT_COUNTERS.get(componentName)![tagName]}-${nanoid()}`
      : `${sanitizedComponent}-${sanitizedTag}-${COMPONENT_COUNTERS.get(componentName)![tagName]}-${nanoid()}`;

    // Increment the counter for this component-tag pair
    COMPONENT_COUNTERS.get(componentName)![tagName]++;

    // Normalize multiple hyphens to a single one
    this.generatedId = this.generatedId.replace(/-+/g, '-').toLowerCase();
  }

  /**
   * Sanitizes a string by replacing invalid characters with a hyphen.
   * Ensures that the component and tag names are valid in the ID.
   */
  private sanitize(value: string): string {
    return value.replace(/[^a-zA-Z0-9-_\\.]/g, '-').toLowerCase();
  }

  /**
   * Initializes the component's counter for a given tag name.
   * Ensures that each component-tag combination has a starting counter.
   */
  private initializeComponentCounters(componentName: string, tagName: string): void {
    if (!COMPONENT_COUNTERS.has(componentName)) {
      COMPONENT_COUNTERS.set(componentName, {});
    }

    const tagCounters = COMPONENT_COUNTERS.get(componentName)!;
    if (!tagCounters[tagName]) {
      tagCounters[tagName] = 0;
    }
  }

  /**
   * Resolves the host component selector from the view container reference.
   * If no component is found, defaults to 'unknown-component'.
   */
  private getComponentSelector(): string | null {
    const nativeElement = this.viewContainerRef.element.nativeElement;

    const tagName = nativeElement.tagName?.toLowerCase();
    if (tagName) return tagName;

    // Try to resolve the host component if tag name is not available
    const hostComponent = this.resolveHostComponent();
    return hostComponent ? (hostComponent.constructor as any).selector ?? 'unknown-component' : 'unknown-element';
  }

  /**
   * Resolves the host component from the view container.
   * This function uses the internal `_lContainer` to fetch the component.
   */
  private resolveHostComponent(): unknown | null {
    const lContainer = (this.viewContainerRef as any)._lContainer;
    if (!lContainer) return null;

    // Indexing used to resolve the component's context from the LView container
    const HOST_INDEX = 0;
    const CONTEXT_INDEX = 8;

    const lView = lContainer[HOST_INDEX];
    return lView ? lView[CONTEXT_INDEX] || null : null;
  }

  /**
   * A snapshot of the current component counters.
   * Returns an array of components and their respective tag counters.
   */
  get countersSnapshot() {
    return Array.from(COMPONENT_COUNTERS.entries()).map(([component, tags]) => ({
      component,
      tags,
    }));
  }
}
