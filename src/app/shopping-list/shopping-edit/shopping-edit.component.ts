import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(form: NgForm) {
    const formValue = form.value;
    const ingredientName = formValue.name;
    const ingredientAmount = formValue.amount;
    const newIngredient = new Ingredient( ingredientName, ingredientAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
