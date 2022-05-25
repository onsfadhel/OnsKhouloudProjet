import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterfactlivintComponent } from './ajouterfactlivint.component';

describe('AjouterfactlivintComponent', () => {
  let component: AjouterfactlivintComponent;
  let fixture: ComponentFixture<AjouterfactlivintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterfactlivintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterfactlivintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
