import { TestBed, inject } from '@angular/core/testing';

import { CreneauService } from './creneau.service';

describe('CreneauService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreneauService]
    });
  });

  it('should ...', inject([CreneauService], (service: CreneauService) => {
    expect(service).toBeTruthy();
  }));
});
