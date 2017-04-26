import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreneauDeleteCandidatDialogComponent } from './creneau-delete-candidat-dialog.component';

describe('CreneauDeleteCandidatDialogComponent', () => {
  let component: CreneauDeleteCandidatDialogComponent;
  let fixture: ComponentFixture<CreneauDeleteCandidatDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreneauDeleteCandidatDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreneauDeleteCandidatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
