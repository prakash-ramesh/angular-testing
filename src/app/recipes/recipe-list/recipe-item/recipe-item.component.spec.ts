import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recipe } from '../../models/recipe.model';
import { RecipeItemComponent } from './recipe-item.component';

describe('RecipeItemComponent', () => {
  let component: RecipeItemComponent;
  let fixture: ComponentFixture<RecipeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeItemComponent);
    component = fixture.componentInstance;
    component.recipe = {
      name: 'Test Recipe 1',
      description: 'Test Description 1',
      imagePath:
        'https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
