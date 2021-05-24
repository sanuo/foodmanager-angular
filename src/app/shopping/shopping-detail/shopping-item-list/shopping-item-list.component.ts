import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingItem } from 'src/app/model/shopping-item.model';
import { ShoppingService } from 'src/app/shared/shopping/shopping.service';

@Component({
  selector: 'app-shopping-item-list',
  templateUrl: './shopping-item-list.component.html',
  styleUrls: ['./shopping-item-list.component.scss']
})
export class ShoppingItemListComponent implements OnInit {

  shoppingItems: ShoppingItem[];

  id:number = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

  constructor(
    private route: ActivatedRoute,
    private shoppingService: ShoppingService
  ) { }

  ngOnInit(): void {
    this.getShoppingItems();
  }

  getShoppingItems(): void {
    this.shoppingService.getShoppingList(this.id).subscribe(
      result => {
        // console.dir(result.shopping_items);
        this.shoppingItems = result.shopping_items;
      },
      error => {
        console.log(error.error);
      }
    );
  }
}
