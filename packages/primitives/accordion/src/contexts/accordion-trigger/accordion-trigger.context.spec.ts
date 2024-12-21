import { Component } from '@angular/core';
import { Context } from '@ngx-primer/primitive/utilities';
import { NgxPrimerAccordionTriggerContext } from './accordion-trigger.context';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'ngx-primer-accordion-trigger',
  template: '<div></div>',
})
class MockAccordionTriggerComponent {}

describe('NgxPrimerAccordionTriggerContext', () => {
  let context: NgxPrimerAccordionTriggerContext<MockAccordionTriggerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxPrimerAccordionTriggerContext],
    });

    context = TestBed.inject(NgxPrimerAccordionTriggerContext);
  });

  it('should be created', () => {
    expect(context).toBeTruthy();
  });

  it('should extend Context', () => {
    expect(context instanceof Context).toBe(true);
  });
});
