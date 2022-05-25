import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadfacturelivintComponent } from './downloadfacturelivint.component';

describe('DownloadfacturelivintComponent', () => {
  let component: DownloadfacturelivintComponent;
  let fixture: ComponentFixture<DownloadfacturelivintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadfacturelivintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadfacturelivintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
