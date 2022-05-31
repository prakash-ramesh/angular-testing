import { Component, OnInit } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  selRecipe: Recipe = {name: '', imagePath: '', description: ''};

  constructor() {}

  ngOnInit(): void {}

  selectedRecipe(recipe: Recipe) {
    this.selRecipe = recipe;
  }
}
