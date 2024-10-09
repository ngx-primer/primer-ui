import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgxPrimerAccordionRootComponent } from './ngx-accordion-root.component';

describe('NgxPrimerAccordionRootComponent', () => {
  let component!: NgxPrimerAccordionRootComponent<unknown>;
  let fixture: ComponentFixture<NgxPrimerAccordionRootComponent<unknown>>;
  

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxPrimerAccordionRootComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPrimerAccordionRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {    
    expect(component).toBeDefined();  
  });
})
