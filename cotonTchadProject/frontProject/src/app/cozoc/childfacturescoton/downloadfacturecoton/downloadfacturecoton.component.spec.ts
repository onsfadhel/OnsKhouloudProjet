import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadfacturecotonComponent } from './downloadfacturecoton.component';

describe('DownloadfacturecotonComponent', () => {
  let component: DownloadfacturecotonComponent;
  let fixture: ComponentFixture<DownloadfacturecotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadfacturecotonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadfacturecotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
