import { Component } from '@angular/core';
import { Context } from '@ngx-primer/primitive/utilities';
import { NgxPrimerAccordionRootContext } from './accordion-root.context';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'ngx-primer-accordion-root',
  template: '<div></div>',
})
class MockAccordionRootComponent {}

describe('NgxPrimerAccordionRootContext', () => {
  let service: NgxPrimerAccordionRootContext<MockAccordionRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxPrimerAccordionRootContext],
    });
    service = TestBed.inject(NgxPrimerAccordionRootContext);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should extend Context', () => {
    expect(service instanceof Context).toBe(true);
  });
});
