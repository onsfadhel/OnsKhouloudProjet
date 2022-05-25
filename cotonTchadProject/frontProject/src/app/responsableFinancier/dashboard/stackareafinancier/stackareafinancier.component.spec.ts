import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackareafinancierComponent } from './stackareafinancier.component';

describe('StackareafinancierComponent', () => {
  let component: StackareafinancierComponent;
  let fixture: ComponentFixture<StackareafinancierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackareafinancierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackareafinancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
