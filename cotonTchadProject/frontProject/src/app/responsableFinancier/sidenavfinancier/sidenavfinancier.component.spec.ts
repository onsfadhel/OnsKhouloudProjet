import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavfinancierComponent } from './sidenavfinancier.component';

describe('SidenavfinancierComponent', () => {
  let component: SidenavfinancierComponent;
  let fixture: ComponentFixture<SidenavfinancierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavfinancierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavfinancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
