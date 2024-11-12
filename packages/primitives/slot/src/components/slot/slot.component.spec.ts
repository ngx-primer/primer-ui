import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPrimerSlotComponent } from './slot.component';

describe('NgxPrimerSlotComponent', () => {
  let component: NgxPrimerSlotComponent<object>;
  let fixture: ComponentFixture<NgxPrimerSlotComponent<object>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxPrimerSlotComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxPrimerSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
