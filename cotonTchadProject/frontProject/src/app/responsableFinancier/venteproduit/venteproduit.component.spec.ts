import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteproduitComponent } from './venteproduit.component';

describe('VenteproduitComponent', () => {
  let component: VenteproduitComponent;
  let fixture: ComponentFixture<VenteproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenteproduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
