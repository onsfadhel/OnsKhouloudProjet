import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavcozocComponent } from './sidenavcozoc.component';

describe('SidenavcozocComponent', () => {
  let component: SidenavcozocComponent;
  let fixture: ComponentFixture<SidenavcozocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavcozocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavcozocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
