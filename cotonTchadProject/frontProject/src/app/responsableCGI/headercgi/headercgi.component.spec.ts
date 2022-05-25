import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadercgiComponent } from './headercgi.component';

describe('HeadercgiComponent', () => {
  let component: HeadercgiComponent;
  let fixture: ComponentFixture<HeadercgiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadercgiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadercgiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
