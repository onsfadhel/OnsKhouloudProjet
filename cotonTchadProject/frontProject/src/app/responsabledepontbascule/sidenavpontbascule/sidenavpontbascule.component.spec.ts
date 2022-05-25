import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavpontbasculeComponent } from './sidenavpontbascule.component';

describe('SidenavpontbasculeComponent', () => {
  let component: SidenavpontbasculeComponent;
  let fixture: ComponentFixture<SidenavpontbasculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavpontbasculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavpontbasculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
