import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

/**
 * Enum representing the state of a collapsible element.
 *
 * @enum {string}
 * @property {string} Collapsed - The state when the element is collapsed.
 * @property {string} Expanded - The state when the element is expanded.
 */
export enum CollapsibleState {
  Collapsed = 'collapsed',
  Expanded = 'Expanded',
}

/**
 * The name of the animation trigger used for collapsible animations in the ngx-primer library.
 * This trigger can be used to apply collapse and expand animations to elements.
 */
export const animationTriggerName = 'ngxPrimerCollapsibleAnimation';

/**
 * The duration of the animation timing for collapse and expand animations.
 *
 * This constant defines the duration of the animation in milliseconds.
 * It is used to control the speed of the collapse and expand animations.
 *
 * @constant {string} animationTimingDuration - The duration of the animation timing.
 */
export const animationTimingDuration = '200ms';

/**
 * A cubic-bezier function that defines the easing curve for animations.
 * This easing function starts and ends slowly, with a faster middle phase.
 *
 * The control points for the cubic-bezier function are:
 * - (0.5, 0.0): The first control point, which defines the initial slope of the curve.
 * - (0.5, 1): The second control point, which defines the ending slope of the curve.
 *
 * This easing function can be used to create smooth animations that have a consistent speed throughout.
 */
export const animationEasingFn = 'cubic-bezier(0.5, 0.0, 0.5, 1)';

/**
 * Defines the animation state for an expanded collapsible element.
 *
 * This state applies styles to the element when it is in the expanded state,
 * including setting the maximum height and width, opacity, and padding.
 *
 * @param {string} expandedHeight - The maximum height of the expanded element. Default is '500px'.
 * @param {string} expandedWidth - The maximum width of the expanded element. Default is '500px'.
 *
 * @example
 * ```typescript
 * const expandedState = state(
 *   CollapsibleState.Expanded,
 *   style({
 *     maxHeight: '{{expandedHeight}}',
 *     maxWidth: '{{expandedWidth}}',
 *     opacity: 1,
 *     paddingTop: '8px',
 *     paddingBottom: '8px',
 *     paddingLeft: '8px',
 *     paddingRight: '8px',
 *   }),
 *   {
 *     params: {
 *       expandedHeight: '500px',
 *       expandedWidth: '500px',
 *     },
 *   }
 * );
 * ```
 */
const expandedState = state(
  CollapsibleState.Expanded,
  style({
    maxHeight: '{{expandedHeight}}',
    maxWidth: '{{expandedWidth}}',
    opacity: 1,
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: '8px',
    paddingRight: '8px',
  }),
  {
    params: {
      expandedHeight: '500px',
      expandedWidth: '500px',
    },
  },
);

/**
 * Defines the collapsed state for a collapsible element.
 *
 * This state sets the element's maximum height and width to the specified
 * `collapsedHeight` and `collapsedWidth` parameters, respectively. It also
 * sets the element's opacity to 0 and adjusts the padding to create a
 * collapsed appearance.
 *
 * @param collapsedHeight - The maximum height of the element when collapsed. Default is '0px'.
 * @param collapsedWidth - The maximum width of the element when collapsed. Default is '0px'.
 *
 * @example
 * ```typescript
 * const collapsedState = state(
 *   CollapsibleState.Collapsed,
 *   style({
 *     maxHeight: '{{collapsedHeight}}',
 *     maxWidth: '{{collapsedWidth}}',
 *     opacity: 0,
 *     paddingTop: '0px',
 *     paddingBottom: '0px',
 *     paddingLeft: '8px',
 *     paddingRight: '8px',
 *   }),
 *   {
 *     params: {
 *       collapsedHeight: '0px',
 *       collapsedWidth: '0px',
 *     },
 *   }
 * );
 * ```
 */
const collapsedState = state(
  CollapsibleState.Collapsed,
  style({
    maxHeight: '{{collapsedHeight}}',
    maxWidth: '{{collapsedWidth}}',
    opacity: 0,
    paddingTop: '0px',
    paddingBottom: '0px',
    paddingLeft: '8px',
    paddingRight: '8px',
  }),
  {
    params: {
      collapsedHeight: '0px',
      collapsedWidth: '0px',
    },
  },
);

/**
 * An object representing the state of a collapsible element.
 *
 * @property {string} collapse - The state when the element is collapsed.
 * @property {string} expanded - The state when the element is expanded.
 */
export const collapsibleState = {
  collapse: collapsedState,
  expanded: expandedState,
};

/**
 * An animation transition configuration for a collapsible element.
 *
 * This configuration defines the transition between the collapsed and expanded states
 * of a collapsible element using Angular animations.
 *
 * @constant
 * @type {Object}
 * @property {Object} default - The default transition configuration.
 * @property {string} default.transition - The transition states between collapsed and expanded.
 * @property {Array} default.animate - The animation parameters including timing duration and easing function.
 * @property {Object} default.params - The parameters for the animation.
 * @property {string} default.params.timingDuration - The duration of the animation.
 * @property {string} default.params.easingFunction - The easing function for the animation.
 */
export const collapsibleTransition = {
  default: transition(
    `${CollapsibleState.Collapsed} <=> ${CollapsibleState.Expanded}`,
    [animate('{{timingDuration}} {{easingFunction}}')],
    {
      params: {
        timingDuration: animationTimingDuration,
        easingFunction: animationEasingFn,
      },
    },
  ),
};

/**
 * Defines the collapse and expand animation for an accordion component.
 *
 * This animation is triggered by the specified `animationTriggerName` and includes
 * the following states and transitions:
 * - `collapsibleState.collapse`: The state when the accordion is collapsed.
 * - `collapsibleState.expanded`: The state when the accordion is expanded.
 * - `collapsibleTransition.default`: The default transition between the collapsed and expanded states.
 *
 * @constant
 * @type {AnimationTriggerMetadata}
 */
export const collapseExpandAnimation = trigger(animationTriggerName, [
  collapsibleState.collapse,
  collapsibleState.expanded,
  collapsibleTransition.default,
]);
