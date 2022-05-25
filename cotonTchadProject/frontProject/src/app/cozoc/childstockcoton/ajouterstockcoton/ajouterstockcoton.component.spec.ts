import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterstockcotonComponent } from './ajouterstockcoton.component';

describe('AjouterstockcotonComponent', () => {
  let component: AjouterstockcotonComponent;
  let fixture: ComponentFixture<AjouterstockcotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterstockcotonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterstockcotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
