import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierfacturecotonComponent } from './modifierfacturecoton.component';

describe('ModifierfacturecotonComponent', () => {
  let component: ModifierfacturecotonComponent;
  let fixture: ComponentFixture<ModifierfacturecotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierfacturecotonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierfacturecotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
