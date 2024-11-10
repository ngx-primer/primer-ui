import { AccordionConfigInterface, defineAccordionConfig } from '../config';

import { AccordionRootContextInjectionToken } from '../context/accordion-root.context';
import { NgxPrimerAccordionRootDirective } from './accordion-root.directive';
import { TestBed } from '@angular/core/testing';
import { booleanAttribute } from '@angular/core';
import { useAccordionRootContext } from '../provider/accordion-root-config.provider';

describe('NgxPrimerAccordionRootDirective', () => {
  let directive: NgxPrimerAccordionRootDirective<string>;
  let config: AccordionConfigInterface;

  const {
    provideAccordionConfig
  } = useAccordionRootContext()

  beforeEach(() => {
    // Configure the testing module
    TestBed.configureTestingModule({
      providers: [
        {
          provide: NgxPrimerAccordionRootDirective,
          useFactory: () => new NgxPrimerAccordionRootDirective(),
        },
        provideAccordionConfig({})
      ]
    });

    config = TestBed.inject(AccordionRootContextInjectionToken, 
      defineAccordionConfig({
        collapsible: true,
        disabled: false,
        orientation: "Vertical",
        type: "Multiple",
        uniqueIdPefix: ""
      }) as AccordionConfigInterface
    );
    directive = TestBed.inject(NgxPrimerAccordionRootDirective);
  });

  it('should create the directive', () => {
    expect(directive).toBeTruthy();
  });

  it('should have the correct initial accordion type', () => {
    expect(directive.type()).toBe(config.type);
  });

  it('should have the correct collapsible property', () => {
    expect(directive.collapsible()).toBe(booleanAttribute(config.collapsible));
  });

  it('should have the correct disabled property', () => {
    expect(directive.disabled()).toBe(booleanAttribute(config.disabled));
  });

  it('should have the correct initial orientation', () => {
    expect(directive.orientation()).toBe(config.orientation);
  });

  it('should set and get accordion value', () => {
    expect(directive.value()).toBeNull();

    // Simulate a change in the value by updating the directive's model input
    directive.value.set('1');
    expect(directive.value()).toEqual('1');
  });
});
