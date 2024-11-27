/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ElementRef, ViewContainerRef } from '@angular/core';

import { IdGeneratorConfig } from '../../providers/id-generator/id-generator.provider';
import { NgxPrimerIdGeneratorDirective } from './id-generator.directive';

describe('NgxPrimerIdGeneratorDirective', () => {
  let directive: NgxPrimerIdGeneratorDirective;
  let mockElementRef: Partial<ElementRef>;
  let mockViewContainerRef: Partial<ViewContainerRef>;

  beforeEach(() => {
    mockElementRef = {
      nativeElement: { tagName: 'DIV' },
    };
    mockViewContainerRef = {
      element: {
        nativeElement: { tagName: 'APP-MY-COMPONENT' },
      },
    };

    directive = new NgxPrimerIdGeneratorDirective();
  });

  describe('given a valid configuration and custom ID', () => {
    beforeEach(() => {
      // @ts-expect-error
      directive.customId = () => 'custom-id';
      directive.config = {
        prefix: 'test',
        separator: '-',
      } as Partial<IdGeneratorConfig>;
    });

    describe('when the directive initializes', () => {
      it('should generate a unique and sanitized ID', () => {
        directive.ngOnInit();

        expect(directive.generatedId).toMatch(
          /^app-my-component-custom-id-\d+-[a-z0-9]+$/
        );
      });

      it('should correctly sanitize the ID', () => {
        // @ts-expect-error
        directive.customId = () => 'Invalid@ID';
        directive.ngOnInit();

        expect(directive.generatedId).toContain('invalid-id');
      });
    });
  });

  describe('given no custom ID is provided', () => {
    beforeEach(() => {
      // @ts-expect-error
      directive.customId = undefined;
    });

    describe('when the directive initializes', () => {
      it('should generate a unique ID based on the component and tag name', () => {
        directive.ngOnInit();

        expect(directive.generatedId).toMatch(
          /^app-my-component-div-\d+-[a-z0-9]+$/
        );
      });
    });
  });

  describe('given an invalid component or tag name', () => {
    beforeEach(() => {
      mockElementRef.nativeElement = { tagName: 'INVALID@TAG' };
    });

    describe('when the directive initializes', () => {
      it('should sanitize the tag name in the generated ID', () => {
        directive.ngOnInit();

        expect(directive.generatedId).toContain('invalid-tag');
      });

      it('should still produce a unique ID', () => {
        directive.ngOnInit();

        expect(directive.generatedId).toMatch(/-[a-z0-9]+$/);
      });
    });
  });

  describe('given no host component is resolved', () => {
    beforeEach(() => {
      // @ts-expect-error
      mockViewContainerRef.element.nativeElement = undefined;
    });

    describe('when the directive initializes', () => {
      it('should default to an unknown component name', () => {
        directive.ngOnInit();

        expect(directive.generatedId).toContain('unknown-element');
      });
    });
  });

  describe('given multiple instances of the same tag', () => {
    beforeEach(() => {
      mockElementRef.nativeElement = { tagName: 'DIV' };
    });

    describe('when the directive initializes multiple times', () => {
      it('should increment the counter for the same tag', () => {
        directive.ngOnInit();
        const firstId = directive.generatedId;

        const anotherDirective = new NgxPrimerIdGeneratorDirective();
        anotherDirective.ngOnInit();
        const secondId = anotherDirective.generatedId;

        expect(firstId).not.toEqual(secondId);
      });
    });
  });
});
