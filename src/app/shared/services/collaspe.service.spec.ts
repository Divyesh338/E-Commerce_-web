import { TestBed } from '@angular/core/testing';

import { CollaspeService } from './collaspe.service';

describe('CollaspeService', () => {
  let service: CollaspeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollaspeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
