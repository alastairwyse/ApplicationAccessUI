import { TestBed } from '@angular/core/testing';

import { ApplicationAccessApi } from './application-access-api';

describe('ApplicationAccessApi', () => {
  let service: ApplicationAccessApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationAccessApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
