import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoismsComponent } from './envoisms.component';

describe('EnvoismsComponent', () => {
  let component: EnvoismsComponent;
  let fixture: ComponentFixture<EnvoismsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvoismsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoismsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
