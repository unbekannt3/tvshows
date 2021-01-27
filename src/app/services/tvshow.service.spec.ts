import { TestBed } from '@angular/core/testing';

import { TVShowService } from './tvshow.service';

describe('TVShowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TVShowService = TestBed.get(TVShowService);
    expect(service).toBeTruthy();
  });
});
