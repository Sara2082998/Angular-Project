import { TestBed } from '@angular/core/testing';

import { ShopingservicesService } from './shopingservices.service';

describe('ShopingservicesService', () => {
  let service: ShopingservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopingservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
