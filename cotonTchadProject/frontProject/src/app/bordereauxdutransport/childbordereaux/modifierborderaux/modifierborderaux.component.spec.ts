import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierborderauxComponent } from './modifierborderaux.component';

describe('ModifierborderauxComponent', () => {
  let component: ModifierborderauxComponent;
  let fixture: ComponentFixture<ModifierborderauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierborderauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierborderauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
