import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardcozocComponent } from './dashboardcozoc.component';

describe('DashboardcozocComponent', () => {
  let component: DashboardcozocComponent;
  let fixture: ComponentFixture<DashboardcozocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardcozocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardcozocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
