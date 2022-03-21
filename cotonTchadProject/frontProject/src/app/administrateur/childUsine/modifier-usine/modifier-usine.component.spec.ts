import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierUsineComponent } from './modifier-usine.component';

describe('ModifierUsineComponent', () => {
  let component: ModifierUsineComponent;
  let fixture: ComponentFixture<ModifierUsineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierUsineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierUsineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
