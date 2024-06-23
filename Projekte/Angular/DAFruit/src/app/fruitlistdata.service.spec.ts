import { TestBed } from '@angular/core/testing';

import { FruitlistdataService } from './fruitlistdata.service';

describe('FruitlistdataService', () => {
  let service: FruitlistdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FruitlistdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
