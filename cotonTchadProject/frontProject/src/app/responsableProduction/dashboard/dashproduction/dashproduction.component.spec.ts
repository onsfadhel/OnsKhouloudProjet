import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashproductionComponent } from './dashproduction.component';

describe('DashproductionComponent', () => {
  let component: DashproductionComponent;
  let fixture: ComponentFixture<DashproductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashproductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashproductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
