import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDocsLayoutComponent } from './app-docs-layout.component';

describe('AppDocsLayoutComponent', () => {
  let component: AppDocsLayoutComponent;
  let fixture: ComponentFixture<AppDocsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDocsLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppDocsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
