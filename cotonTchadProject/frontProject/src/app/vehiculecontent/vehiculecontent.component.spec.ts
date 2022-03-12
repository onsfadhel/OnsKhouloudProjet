import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculecontentComponent } from './vehiculecontent.component';

describe('VehiculecontentComponent', () => {
  let component: VehiculecontentComponent;
  let fixture: ComponentFixture<VehiculecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculecontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
