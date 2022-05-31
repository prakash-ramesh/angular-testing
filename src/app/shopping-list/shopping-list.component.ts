import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    {name: 'Apples', amount: 5},
    {name: 'Mangoes', amount: 15}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
