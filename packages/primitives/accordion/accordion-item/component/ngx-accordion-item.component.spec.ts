import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgxPrimerAccordionItemComponent } from './ngx-accordion-item.component';

describe('NgxPrimerAccordionItemComponent', () => {
  let component!: NgxPrimerAccordionItemComponent<unknown>;
  let fixture: ComponentFixture<NgxPrimerAccordionItemComponent<unknown>>;
  

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxPrimerAccordionItemComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPrimerAccordionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {    
    expect(component).toBeDefined();  
  });
})
