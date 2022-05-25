import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierstockcotonComponent } from './modifierstockcoton.component';

describe('ModifierstockcotonComponent', () => {
  let component: ModifierstockcotonComponent;
  let fixture: ComponentFixture<ModifierstockcotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierstockcotonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierstockcotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
