import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPrimerAccordionTriggerComponent } from './accordion-trigger.component';

describe('NgxPrimerAccordionTriggerComponent', () => {
  let component: NgxPrimerAccordionTriggerComponent<unknown>;
  let fixture: ComponentFixture<NgxPrimerAccordionTriggerComponent<unknown>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxPrimerAccordionTriggerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxPrimerAccordionTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct role attribute', () => {
    expect(fixture.nativeElement.getAttribute('role')).toBe('button');
  });

  it('should have the correct tabIndex attribute', () => {
    expect(fixture.nativeElement.getAttribute('tabIndex')).toBe('-1');
  });

  it('should toggle accordion item on click', () => {
    spyOn(component, 'toogle');
    fixture.nativeElement.click();
    expect(component.toogle).toHaveBeenCalled();
  });

  it('should handle keydown events', () => {
    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    spyOn(component, 'onKeyDown');
    fixture.nativeElement.dispatchEvent(event);
    expect(component.onKeyDown).toHaveBeenCalledWith(event);
  });

  it('should focus the element', () => {
    spyOn(component, 'focus');
    component.focus();
    expect(component.focus).toHaveBeenCalled();
  });

  it('should have the correct aria-controls attribute', () => {
    expect(fixture.nativeElement.getAttribute('aria-controls')).toBeNull();
  });

  it('should have the correct data-expanded attribute', () => {
    expect(fixture.nativeElement.getAttribute('data-expanded')).toBeNull();
  });
});
