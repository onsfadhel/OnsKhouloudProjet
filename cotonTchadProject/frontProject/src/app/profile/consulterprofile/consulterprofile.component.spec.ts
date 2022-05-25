import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterprofileComponent } from './consulterprofile.component';

describe('ConsulterprofileComponent', () => {
  let component: ConsulterprofileComponent;
  let fixture: ComponentFixture<ConsulterprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
