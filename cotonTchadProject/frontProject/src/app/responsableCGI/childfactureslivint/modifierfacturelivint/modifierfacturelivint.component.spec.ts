import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierfacturelivintComponent } from './modifierfacturelivint.component';

describe('ModifierfacturelivintComponent', () => {
  let component: ModifierfacturelivintComponent;
  let fixture: ComponentFixture<ModifierfacturelivintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierfacturelivintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierfacturelivintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
