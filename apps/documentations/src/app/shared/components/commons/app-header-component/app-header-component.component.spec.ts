import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppHeaderComponentComponent } from './app-header-component.component';

describe('AppHeaderComponentComponent', () => {
  let component: AppHeaderComponentComponent;
  let fixture: ComponentFixture<AppHeaderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppHeaderComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
