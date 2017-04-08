import { TestBed, inject } from '@angular/core/testing';

import { ServCandidatsService } from './serv-candidats.service';

describe('ServCandidatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServCandidatsService]
    });
  });

  it('should ...', inject([ServCandidatsService], (service: ServCandidatsService) => {
    expect(service).toBeTruthy();
  }));
});
