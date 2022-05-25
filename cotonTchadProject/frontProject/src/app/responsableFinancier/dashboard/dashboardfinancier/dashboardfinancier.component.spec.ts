import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardfinancierComponent } from './dashboardfinancier.component';

describe('DashboardfinancierComponent', () => {
  let component: DashboardfinancierComponent;
  let fixture: ComponentFixture<DashboardfinancierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardfinancierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardfinancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
