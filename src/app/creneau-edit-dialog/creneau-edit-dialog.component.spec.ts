import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreneauEditDialogComponent } from './creneau-edit-dialog.component';

describe('CreneauEditDialogComponent', () => {
  let component: CreneauEditDialogComponent;
  let fixture: ComponentFixture<CreneauEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreneauEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreneauEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
