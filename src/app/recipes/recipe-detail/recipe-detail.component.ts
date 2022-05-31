import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe = {name: '', imagePath: '', description: ''};

  @ViewChild('manageRecipe', { read: ElementRef }) manageRecipe?: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  toggleOpen() {
    let hide = this.manageRecipe?.nativeElement.classList.contains('show');
    if (hide) {
      this.renderer.removeClass(this.manageRecipe?.nativeElement, 'show');
    } else {
      this.renderer.addClass(this.manageRecipe?.nativeElement, 'show');
    }
  }
}
