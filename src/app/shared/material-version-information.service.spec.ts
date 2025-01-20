import { TestBed } from '@angular/core/testing';

import { MaterialVersionInformationService } from './material-version-information.service';

describe('MaterialVersionInformationService', () => {
  let service: MaterialVersionInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialVersionInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
