import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderproductionComponent } from './headerproduction.component';

describe('HeaderproductionComponent', () => {
  let component: HeaderproductionComponent;
  let fixture: ComponentFixture<HeaderproductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderproductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderproductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
