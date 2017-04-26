import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCandidatsComponent } from './upload-candidats.component';

describe('UploadCandidatsComponent', () => {
  let component: UploadCandidatsComponent;
  let fixture: ComponentFixture<UploadCandidatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadCandidatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCandidatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
