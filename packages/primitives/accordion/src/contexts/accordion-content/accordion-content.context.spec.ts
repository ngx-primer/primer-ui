import { Component } from '@angular/core';
import { Context } from '@ngx-primer/primitive/utilities';
import { NgxPrimerAccordionContentContext } from './accordion-content.context';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'ngx-primer-accordion-content',
  template: '<div>Accordion Content</div>',
})
class MockAccordionContentComponent {}

describe('NgxPrimerAccordionContentContext', () => {
  let context: NgxPrimerAccordionContentContext<MockAccordionContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NgxPrimerAccordionContentContext,
        { provide: Component, useClass: MockAccordionContentComponent },
      ],
    });

    context = TestBed.inject(NgxPrimerAccordionContentContext);
  });

  it('should be created', () => {
    expect(context).toBeTruthy();
  });

  it('should extend Context', () => {
    expect(context instanceof Context).toBe(true);
  });
});
