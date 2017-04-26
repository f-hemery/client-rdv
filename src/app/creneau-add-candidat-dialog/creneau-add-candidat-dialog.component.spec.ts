import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreneauAddCandidatDialogComponent } from './creneau-add-candidat-dialog.component';

describe('CreneauAddCandidatDialogComponent', () => {
  let component: CreneauAddCandidatDialogComponent;
  let fixture: ComponentFixture<CreneauAddCandidatDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreneauAddCandidatDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreneauAddCandidatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
