import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiertransactionComponent } from './modifiertransaction.component';

describe('ModifiertransactionComponent', () => {
  let component: ModifiertransactionComponent;
  let fixture: ComponentFixture<ModifiertransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiertransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiertransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
