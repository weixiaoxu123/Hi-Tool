import { TestBed, inject } from '@angular/core/testing';

import { ReaddateService } from './readdate.service';

describe('ReaddateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReaddateService]
    });
  });

  it('should be created', inject([ReaddateService], (service: ReaddateService) => {
    expect(service).toBeTruthy();
  }));
});
