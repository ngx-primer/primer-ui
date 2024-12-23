import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFooterComponentComponent } from './app-footer-component.component';

describe('AppFooterComponentComponent', () => {
  let component: AppFooterComponentComponent;
  let fixture: ComponentFixture<AppFooterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFooterComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppFooterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
