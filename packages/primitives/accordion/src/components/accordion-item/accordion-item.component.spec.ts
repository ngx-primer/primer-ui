import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPrimerAccordionItemComponent } from './accordion-item.component';

describe('NgxPrimerAccordionItemComponent', () => {
  let component: NgxPrimerAccordionItemComponent<unknown>;
  let fixture: ComponentFixture<NgxPrimerAccordionItemComponent<unknown>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxPrimerAccordionItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxPrimerAccordionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default value as null', () => {
    expect(component.value()).toBeNull();
  });

  it('should have default disabled state as false', () => {
    expect(component.disabled()).toBeFalsy();
  });

  it('should have default isOpen state as false', () => {
    expect(component.isOpen()).toBeFalsy();
  });

  it('should set data-orientation attribute based on accordionRoot orientation', () => {
    spyOn(component, 'accordionRoot').and.returnValue({
      orientation: () => 'horizontal',
    });
    fixture.detectChanges();
    expect(fixture.nativeElement.getAttribute('data-orientation')).toBe(
      'horizontal',
    );
  });

  it('should set data-is-open attribute based on isOpen state', () => {
    spyOn(component, 'isOpen').and.returnValue(true);
    fixture.detectChanges();
    expect(fixture.nativeElement.getAttribute('data-is-open')).toBe('true');
  });

  it('should set data-value attribute based on value', () => {
    component.value.set('testValue');
    fixture.detectChanges();
    expect(fixture.nativeElement.getAttribute('data-value')).toBe('testValue');
  });

  it('should set data-disabled attribute based on accordionRoot disabled state', () => {
    spyOn(component, 'accordionRoot').and.returnValue({
      disabled: () => true,
    });
    fixture.detectChanges();
    expect(fixture.nativeElement.getAttribute('data-disabled')).toBe('true');
  });

  it('should focus on accordion trigger when focus method is called', () => {
    const focusSpy = jasmine.createSpy('focus');
    spyOn(component, 'accordionTrigger').and.returnValue({
      focus: focusSpy,
    });
    component.focus();
    expect(focusSpy).toHaveBeenCalled();
  });
});
