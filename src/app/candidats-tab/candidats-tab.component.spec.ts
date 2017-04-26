import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatsTabComponent } from './candidats-tab.component';

describe('CandidatsTabComponent', () => {
  let component: CandidatsTabComponent;
  let fixture: ComponentFixture<CandidatsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
