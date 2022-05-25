import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierbordlivComponent } from './modifierbordliv.component';

describe('ModifierbordlivComponent', () => {
  let component: ModifierbordlivComponent;
  let fixture: ComponentFixture<ModifierbordlivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierbordlivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierbordlivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
