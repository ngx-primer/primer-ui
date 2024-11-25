import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPrimerAccordionRootComponent } from './accordion-root.component';

describe('NgxPrimerAccordionRootComponent', () => {
  let component: NgxPrimerAccordionRootComponent<unknown>;
  let fixture: ComponentFixture<NgxPrimerAccordionRootComponent<unknown>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxPrimerAccordionRootComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxPrimerAccordionRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
