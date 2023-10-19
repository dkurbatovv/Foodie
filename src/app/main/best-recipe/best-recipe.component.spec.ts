import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestRecipeComponent } from './best-recipe.component';

describe('BestRecipeComponent', () => {
  let component: BestRecipeComponent;
  let fixture: ComponentFixture<BestRecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestRecipeComponent]
    });
    fixture = TestBed.createComponent(BestRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
