import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryRecipeComponent } from './try-recipe.component';

describe('TryRecipeComponent', () => {
  let component: TryRecipeComponent;
  let fixture: ComponentFixture<TryRecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TryRecipeComponent]
    });
    fixture = TestBed.createComponent(TryRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
