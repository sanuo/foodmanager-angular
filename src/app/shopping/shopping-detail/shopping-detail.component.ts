import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingList } from 'src/app/model/shopping-list.model';
import { ShoppingService } from 'src/app/shared/shopping/shopping.service';

@Component({
  selector: 'app-shopping-detail',
  templateUrl: './shopping-detail.component.html',
  styleUrls: ['./shopping-detail.component.scss']
})
export class ShoppingDetailComponent implements OnInit {

  shoppingList: ShoppingList;

  id:number = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

  constructor(
    private route: ActivatedRoute,
    private shoppingService: ShoppingService
  ) { }

  ngOnInit(): void {
    this.getShoppingList();
  }

  getShoppingList(): void {
    this.shoppingService.getShoppingList(this.id).subscribe(
      result => {
        this.shoppingList = result;
      },
      error => {
        console.log(error.error);
      }
    );
  }

}
