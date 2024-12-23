import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFeatureCardComponent } from './app-feature-card.component';

describe('AppFeatureCardComponent', () => {
  let component: AppFeatureCardComponent;
  let fixture: ComponentFixture<AppFeatureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFeatureCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppFeatureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
