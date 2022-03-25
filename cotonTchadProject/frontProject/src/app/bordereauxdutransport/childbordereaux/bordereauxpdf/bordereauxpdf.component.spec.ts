import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BordereauxpdfComponent } from './bordereauxpdf.component';

describe('BordereauxpdfComponent', () => {
  let component: BordereauxpdfComponent;
  let fixture: ComponentFixture<BordereauxpdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BordereauxpdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BordereauxpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
