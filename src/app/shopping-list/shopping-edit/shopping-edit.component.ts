import { Component, ElementRef, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('itemName') itemName!: ElementRef;
  @ViewChild('itemAmount') itemAmount!: ElementRef;
  @Output() addItem = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    this.addItem.emit({name: this.itemName.nativeElement.value, amount: this.itemAmount.nativeElement.value});
  }
}
