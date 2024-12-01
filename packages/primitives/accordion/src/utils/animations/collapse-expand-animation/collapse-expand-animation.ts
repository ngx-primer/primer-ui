import {animate, state, style, transition, trigger} from '@angular/animations';
export enum CollapsibleState {
  Collapsed = 'collapsed',
  Expanded = 'Expanded'
}
export const animationTriggerName = 'ngxPrimerCollapsibleAnimation';
export const animationTimingDuration = '200ms';
export const animationEasingFn = 'cubic-bezier(0.5, 0.0, 0.5, 1)';
const expandedState = state(CollapsibleState.Expanded, style({
  maxHeight: '{{expandedHeight}}',
  maxWidth: '{{expandedWidth}}',
  opacity: 1,
  paddingTop: '8px',
  paddingBottom: '8px',
  paddingLeft: '8px',
  paddingRight: '8px',
}), {
  params: {
    expandedHeight: '500px',
    expandedWidth: '500px'
  }
});
const collapsedState = state(CollapsibleState.Collapsed, style({
  maxHeight: '{{collapsedHeight}}',
  maxWidth: '{{collapsedWidth}}',
  opacity: 0,
  paddingTop: '0px',
  paddingBottom: '0px',
  paddingLeft: '0px',
  paddingRight: '0px',
}), {
  params: {
    collapsedHeight: '0px',
    collapsedWidth: '0px'
  }
})
export const collapsibleState = {
  collapse: collapsedState,
  expanded: expandedState,
};
export const collapsibleTransition = {
  default: transition(`${CollapsibleState.Collapsed} <=> ${CollapsibleState.Expanded}`, [
    animate('{{timingDuration}} {{easingFunction}}')
  ], {
    params: {
      timingDuration: animationTimingDuration,
      easingFunction: animationEasingFn,
    }
  })
}
export const collapseExpandAnimation = trigger(animationTriggerName, [
  collapsibleState.collapse,
  collapsibleState.expanded,
  collapsibleTransition.default,
]);