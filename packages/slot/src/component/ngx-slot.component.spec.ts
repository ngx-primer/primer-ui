import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSlotComponent } from './ngx-slot.component';

describe('NgxSlotComponent', () => {
  let component: NgxSlotComponent;
  let fixture: ComponentFixture<NgxSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSlotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
