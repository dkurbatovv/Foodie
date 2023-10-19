import { TestBed } from '@angular/core/testing';

import { BestRecipesService } from './best-recipes.service';

describe('BestRecipesService', () => {
  let service: BestRecipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestRecipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
