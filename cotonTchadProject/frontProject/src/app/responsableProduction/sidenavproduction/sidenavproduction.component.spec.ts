import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavproductionComponent } from './sidenavproduction.component';

describe('SidenavproductionComponent', () => {
  let component: SidenavproductionComponent;
  let fixture: ComponentFixture<SidenavproductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavproductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavproductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
