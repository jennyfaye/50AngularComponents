import { Component } from '@angular/core';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrl: './shoppinglist.component.css'
})
export class ShoppinglistComponent {
  item: string = '';
  shoppingList: string[] = [];

  addItem() {
    if (this.item.trim()) {
      this.shoppingList.push(this.item.trim());
      this.item = '';
      console.log("Added Item")
    }
  }

  removeItem(index: number) {
    this.shoppingList.splice(index, 1);
    console.log("Removed Item")
  }
}
