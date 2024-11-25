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
});
