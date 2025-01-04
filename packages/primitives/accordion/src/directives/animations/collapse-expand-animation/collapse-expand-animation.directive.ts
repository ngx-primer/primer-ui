import { CollapsibleState, animationTriggerName } from '../../../utils';
/* eslint-disable @angular-eslint/no-input-rename */
import { Directive, HostBinding, input } from '@angular/core';

import { NgxPrimerAccordionOrientation } from '../../../configs/accordion-config';

@Directive({
  selector: '[ngxPrimerCollapsibleDirective]',
  exportAs: 'ngxPrimerCollapsibleDirective',
  standalone: true,
})
export class NgxPrimerCollapseExpandAnimationDirective {
  /**
   * Collapsed state of the collapsible.
   */
  public readonly collapsed = input.required<boolean>({
    alias: 'ngxPrimerCollapsibleCollapsed',
  });

  /**
   * Collapsible direction.
   */
  public readonly collapsibleDirection = input.required<
    NgxPrimerAccordionOrientation | 'Vertical' | 'Horizontal'
  >({
    alias: 'ngxPrimerCollapsibleDirection',
  });

  /**
   * Binding animation trigger name attribute value.
   */
  @HostBinding(`@${animationTriggerName}`)
  public get animationParams() {
    return {
      value: this.collapsed()
        ? CollapsibleState.Collapsed
        : CollapsibleState.Expanded,
      params: {
        collapsedHeight:
          this.collapsibleDirection() === NgxPrimerAccordionOrientation.Vertical
            ? '0px'
            : '*',
        collapsedWidth:
          this.collapsibleDirection() ===
          NgxPrimerAccordionOrientation.Horizontal
            ? '0px'
            : '*',
        expandedHeight:
          this.collapsibleDirection() === NgxPrimerAccordionOrientation.Vertical
            ? '*'
            : '*',
        expandedWidth:
          this.collapsibleDirection() ===
          NgxPrimerAccordionOrientation.Horizontal
            ? '*'
            : '*',
        duration: '300ms',
      },
    };
  }
}
