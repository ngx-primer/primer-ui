import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxPrimerAccordionContentComponent } from './accordion-content.component';

describe('NgxPrimerAccordionContentComponent', () => {
  let component: NgxPrimerAccordionContentComponent;
  let fixture: ComponentFixture<NgxPrimerAccordionContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxPrimerAccordionContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxPrimerAccordionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
