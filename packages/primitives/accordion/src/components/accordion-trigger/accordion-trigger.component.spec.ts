import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxPrimerAccordionTriggerComponent } from './accordion-trigger.component';

describe('NgxPrimerAccordionTriggerComponent', () => {
  let component: NgxPrimerAccordionTriggerComponent;
  let fixture: ComponentFixture<NgxPrimerAccordionTriggerComponent>;

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
});
