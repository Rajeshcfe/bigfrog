import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInComponentSectionComponent } from './log-in-component-section.component';

describe('LogInComponentSectionComponent', () => {
  let component: LogInComponentSectionComponent;
  let fixture: ComponentFixture<LogInComponentSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInComponentSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInComponentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
