import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeDetail = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    {
      name: 'Test Recipe 1',
      description: 'Test Description 1',
      imagePath:
        'https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg',
    },
    {
      name: 'Test Recipe 2',
      description: 'Test Description 2',
      imagePath:
        'https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  loadRecipeDetail(recipe: Recipe) {
    this.recipeDetail.emit(recipe);
  }
}
