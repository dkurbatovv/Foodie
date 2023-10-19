import { TestBed } from '@angular/core/testing';

import { RecipesAdminService } from './recipes-admin.service';

describe('RecipesAdminService', () => {
  let service: RecipesAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
