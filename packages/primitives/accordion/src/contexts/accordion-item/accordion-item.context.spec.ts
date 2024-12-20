import { Component } from '@angular/core';
import { NgxPrimerAccordionItemContext } from './accordion-item.context';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'ngx-primer-accordion-item',
  template: '<div>Accordion Item</div>'
})
class MockAccordionItemComponent {}
describe('NgxPrimerAccordionItemContext', () => {
  let context: NgxPrimerAccordionItemContext<MockAccordionItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxPrimerAccordionItemContext]
    });

    context = TestBed.inject(NgxPrimerAccordionItemContext);
  });

  it('should be created', () => {
    expect(context).toBeTruthy();
  });

  // Add more tests here
});