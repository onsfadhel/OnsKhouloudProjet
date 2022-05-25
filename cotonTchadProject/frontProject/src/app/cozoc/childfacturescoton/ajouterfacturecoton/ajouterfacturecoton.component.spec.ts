import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterfacturecotonComponent } from './ajouterfacturecoton.component';

describe('AjouterfacturecotonComponent', () => {
  let component: AjouterfacturecotonComponent;
  let fixture: ComponentFixture<AjouterfacturecotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterfacturecotonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterfacturecotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
