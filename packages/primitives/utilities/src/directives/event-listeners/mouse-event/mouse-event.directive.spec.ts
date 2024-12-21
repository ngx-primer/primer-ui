import { ElementRef } from '@angular/core';
import { NgxPrimerMouseEventDirective } from './mouse-event.directive';
import { TestBed } from '@angular/core/testing';

describe('MouseEventDirective', () => {
  let directive: NgxPrimerMouseEventDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NgxPrimerMouseEventDirective,
        { provide: ElementRef, useValue: new ElementRef(null) },
      ],
    });

    directive = TestBed.inject(NgxPrimerMouseEventDirective);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
