import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppFeatureButtonComponent } from './app-feature-button.component';

describe('AppFeatureButtonComponent', () => {
  let component: AppFeatureButtonComponent;
  let fixture: ComponentFixture<AppFeatureButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFeatureButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppFeatureButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
