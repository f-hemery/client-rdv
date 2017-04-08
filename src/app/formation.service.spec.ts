import { TestBed, inject } from '@angular/core/testing';

import { FormationService } from './formation.service';

describe('FormationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormationService]
    });
  });

  it('should ...', inject([FormationService], (service: FormationService) => {
    expect(service).toBeTruthy();
  }));
});
