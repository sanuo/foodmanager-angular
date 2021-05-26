import { Component, OnInit } from '@angular/core';
import { ShoppingList } from 'src/app/model/shopping-list.model';
import { ShoppingService } from 'src/app/shared/shopping/shopping.service';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  // fontawsome
  faShoppingBasket = faShoppingBasket;
  
  shoppingLists: ShoppingList[];

  constructor(
    private shoppingService: ShoppingService
  ) { }

  ngOnInit(): void {
    // 登録済みの買い物リストを取得
    this.shoppingService.getShoppingLists().subscribe((data:any) => {
      this.shoppingLists = data;
    })
  }

}
