import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreneauDialogComponent } from './creneau-dialog.component';

describe('CreneauDialogComponent', () => {
  let component: CreneauDialogComponent;
  let fixture: ComponentFixture<CreneauDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreneauDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreneauDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
