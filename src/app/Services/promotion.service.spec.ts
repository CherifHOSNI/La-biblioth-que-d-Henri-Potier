import { TestBed } from '@angular/core/testing';

import { PromotionService } from './promotion.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PromotionService', () => {
  let service: PromotionService;

  afterEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PromotionService],
    });
    service = TestBed.inject(PromotionService);
  });
});
