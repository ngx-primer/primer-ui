import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPrimerAccordionContentComponent } from './accordion-content.component';
import { NgxPrimerAccordionItemComponent } from '../accordion-item/accordion-item.component';
import { NgxPrimerAccordionRootComponent } from '../accordion-root/accordion-root.component';
import { NgxPrimerIdGeneratorDirective } from '@ngx-primer/primitive/utilities';

describe('NgxPrimerAccordionContentComponent', () => {
  let component: NgxPrimerAccordionContentComponent<unknown>;
  let fixture: ComponentFixture<NgxPrimerAccordionContentComponent<unknown>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxPrimerAccordionContentComponent],
      declarations: [
        NgxPrimerAccordionItemComponent,
        NgxPrimerIdGeneratorDirective,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxPrimerAccordionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have role attribute set to region', () => {
    expect(fixture.nativeElement.getAttribute('role')).toBe('region');
  });

  it('should have data-orientation attribute', () => {
    spyOn(
      component.accordionRoot as NgxPrimerAccordionRootComponent<unknown>,
      'orientation',
    ).and.returnValue('vertical');
    fixture.detectChanges();
    expect(fixture.nativeElement.getAttribute('data-orientation')).toBe(
      'vertical',
    );
  });

  it('should have data-expanded attribute', () => {
    spyOn(
      component.accordionItem as NgxPrimerAccordionItemComponent<unknown>,
      'isOpen',
    ).and.returnValue(true);
    fixture.detectChanges();
    expect(fixture.nativeElement.getAttribute('data-expanded')).toBe('true');
  });

  it('should have data-is-open attribute', () => {
    spyOn(
      component.accordionItem as NgxPrimerAccordionItemComponent<unknown>,
      'isOpen',
    ).and.returnValue(true);
    fixture.detectChanges();
    expect(fixture.nativeElement.getAttribute('data-is-open')).toBe('true');
  });

  it('should have aria-labelledby attribute', () => {
    const mockTriggerId = 'trigger-id';
    if (component.accordionItem) {
      const accordionItem =
        component.accordionItem as NgxPrimerAccordionItemComponent<unknown>;
      (
        accordionItem.accordionTrigger as { accordionTriggerId: string }
      ).accordionTriggerId = mockTriggerId;
    }
    fixture.detectChanges();
    expect(fixture.nativeElement.getAttribute('aria-labelledby')).toBe(
      mockTriggerId,
    );
  });
});
