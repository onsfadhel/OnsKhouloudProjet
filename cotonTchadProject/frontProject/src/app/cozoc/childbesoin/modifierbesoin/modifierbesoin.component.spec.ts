import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierbesoinComponent } from './modifierbesoin.component';

describe('ModifierbesoinComponent', () => {
  let component: ModifierbesoinComponent;
  let fixture: ComponentFixture<ModifierbesoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierbesoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierbesoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
