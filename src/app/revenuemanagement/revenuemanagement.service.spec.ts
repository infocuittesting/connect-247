import { TestBed, inject } from '@angular/core/testing';

import { RevenuemanagementService } from './revenuemanagement.service';

describe('RevenuemanagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RevenuemanagementService]
    });
  });

  it('should be created', inject([RevenuemanagementService], (service: RevenuemanagementService) => {
    expect(service).toBeTruthy();
  }));
});
