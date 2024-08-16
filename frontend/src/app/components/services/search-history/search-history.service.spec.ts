import { TestBed } from '@angular/core/testing';

import { SearcHistoryService } from './search-history.service';

describe('SearcHistoryService', () => {
  let service: SearcHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearcHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
