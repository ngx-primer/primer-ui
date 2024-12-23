import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppContentSectionComponent } from './app-content-section.component';

describe('AppContentSectionComponent', () => {
  let component: AppContentSectionComponent;
  let fixture: ComponentFixture<AppContentSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppContentSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppContentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
