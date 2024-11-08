import { TestBed } from '@angular/core/testing';

import { BtgBackService } from './btg-back.service';

describe('BtgBackService', () => {
  let service: BtgBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BtgBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
