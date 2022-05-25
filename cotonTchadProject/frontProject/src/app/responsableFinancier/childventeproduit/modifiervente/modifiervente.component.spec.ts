import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierventeComponent } from './modifiervente.component';

describe('ModifierventeComponent', () => {
  let component: ModifierventeComponent;
  let fixture: ComponentFixture<ModifierventeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierventeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierventeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
