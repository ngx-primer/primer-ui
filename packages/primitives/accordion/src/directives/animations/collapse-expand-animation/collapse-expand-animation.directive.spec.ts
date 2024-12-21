import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxPrimerAccordionOrientation } from '../../../configs/accordion-config';
import { NgxPrimerCollapseExpandAnimationDirective } from './collapse-expand-animation.directive';
import { TestBed } from '@angular/core/testing';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  standalone: true,
  imports: [CommonModule, NgxPrimerCollapseExpandAnimationDirective],
  providers: [provideAnimations()],
  template: `
    <div
      ngxPrimerCollapsibleDirective
      [ngxPrimerCollapsibleCollapsed]="collapsed"
      [ngxPrimerCollapsibleDirection]="direction"
    ></div>
  `,
})
class TestComponent {
  collapsed = false;
  direction: NgxPrimerAccordionOrientation | 'Vertical' | 'Horizontal' =
    NgxPrimerAccordionOrientation.Vertical;
}

describe('NgxPrimerCollapseExpandAnimationDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent, NgxPrimerCollapseExpandAnimationDirective],
      providers: [provideAnimations()],
    }).compileComponents();
  });

  it('should create an instance', () => {
    const fixture = TestBed.createComponent(TestComponent);
    const directiveEl = fixture.debugElement.query(
      By.directive(NgxPrimerCollapseExpandAnimationDirective)
    );
    expect(directiveEl).toBeTruthy();
  });
});
