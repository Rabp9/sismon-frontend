import { TestBed } from '@angular/core/testing';

import { TblService } from './tbl.service';

describe('TblService', () => {
  let service: TblService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TblService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
