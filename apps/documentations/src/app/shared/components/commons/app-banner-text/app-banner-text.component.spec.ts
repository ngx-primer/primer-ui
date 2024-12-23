import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBannerTextComponent } from './app-banner-text.component';

describe('AppBannerTextComponent', () => {
  let component: AppBannerTextComponent;
  let fixture: ComponentFixture<AppBannerTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBannerTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppBannerTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
