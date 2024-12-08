import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxPrimerAccordionType, defaultAccordionConfig, provideAccordionConfig } from '../../configs/accordion-config';

import { NgxPrimerAccordionConfigToken } from '../../tokens/accordion-config.token';
import { NgxPrimerAccordionRootComponent } from './accordion-root.component';

describe('NgxPrimerAccordionRootComponent', () => {
  let component: NgxPrimerAccordionRootComponent<unknown>;
  let fixture: ComponentFixture<NgxPrimerAccordionRootComponent<unknown>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NgxPrimerAccordionRootComponent,
      ],
      providers: [
        provideAccordionConfig({
          collapsible: true,
          orientation: "Vertical",
          theme: {
            builtIn: true
          },
          type: "Single"
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NgxPrimerAccordionRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("NgxPrimerAccordionRootComponent Initiialization", () => {
    describe("When [NgxPrimerAccordionRootComponent] Has Been Initalized", () => {
      it("Should to be defined", () => {
        expect(component).toBeDefined();
        expect(component).toBeTruthy();
      })

      it('should set default value during initialization', () => {
        component.value.set('default-item');
        component.ngOnInit();
  
        expect(component.value()).toBe('default-item');
      });
  
      it('should set context instance during initialization', () => {
        component.ngOnInit();
  
        expect(component.accordionRootContext?.instance).toBe(component);
      });

      it('should read the default config during initialized', () => {
        const config = defaultAccordionConfig();
        component.ngOnInit();

        expect(component.accordionConfig).toEqual(config);
      })
      it('should reflect changes to the global configuration changed', () => {
        const providedConfig = TestBed.inject(NgxPrimerAccordionConfigToken);
        providedConfig.type = NgxPrimerAccordionType.Multiple;
        providedConfig.collapsible = true;
        
        fixture.detectChanges();
        
        expect(component.accordionConfig.type).toEqual(NgxPrimerAccordionType.Multiple);
        expect(component.accordionConfig.collapsible).toBeTruthy();
      });

      describe('When given default value', () => {
        it('Should reflect default value as current value in Single Mode', () => {
          const accordions = [
            '1',
            '2'
          ];

          const defaultValue = accordions[1];
          component.defaultValue.set(defaultValue);

          component.ngOnInit();
          
          fixture.detectChanges();

          expect(component.defaultValue()).toBe(defaultValue);
          expect(component.value()).toBe(defaultValue);
        })
        it('Should reflect default value as current value in Multiple Mode', () => {

          component.type.set('Multiple');
          
          const accordions = [
            '1',
            '2'
          ];

          const defaultValue = accordions[0];
          component.defaultValue.set(defaultValue);

          component.ngOnInit();
          
          fixture.detectChanges();

          expect(component.defaultValue()).toBe(defaultValue);
          expect(component.value()).toBe(defaultValue);

          expect(component.isOpen(accordions[0])).toBeTruthy();
          expect(component.isOpen(accordions[1])).toBeFalsy();
        })
      })
    });


    describe('When [NgxPrimerAccordionRootComponent][isOpen()] Has Been Called', () => {
      it('should return true for a selected value in Single mode', () => {
        component.type.set(NgxPrimerAccordionType.Single);
        
        fixture.detectChanges();

        expect(component.type()).toEqual(NgxPrimerAccordionType.Single);
        
        component.value.set('item-1');

        fixture.detectChanges();
  
        expect(component.value()).toEqual('item-1');
        expect(component.isOpen('item-1')).toBeTruthy();
        
        component.value.set('item-2');

        fixture.detectChanges();
        
        expect(component.value()).toEqual('item-2');
        expect(component.isOpen('item-2')).toBeTruthy();

        expect(component.value()).not.toEqual('item-1');
        expect(component.isOpen('item-1')).not.toBeTruthy();
      });
  
      it('should return true for a selected value in Multiple mode', () => {
        component.type.set(NgxPrimerAccordionType.Multiple);
        
        fixture.detectChanges();

        expect(component.type()).toEqual(NgxPrimerAccordionType.Multiple);
        
        component.value.set(['item-1', 'item-2']);

        fixture.detectChanges();
  
        expect(component.value()).toEqual(['item-1', 'item-2']);
        expect(component.isOpen('item-1')).toBeTruthy();
        expect(component.isOpen('item-2')).toBeTruthy();
      });
    });
  })
});
