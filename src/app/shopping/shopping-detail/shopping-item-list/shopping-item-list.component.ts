import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingItem } from 'src/app/model/shopping-item.model';
import { ShoppingService } from 'src/app/shared/shopping/shopping.service';

@Component({
  selector: 'app-shopping-item-list',
  templateUrl: './shopping-item-list.component.html',
  styleUrls: ['./shopping-item-list.component.scss']
})
export class ShoppingItemListComponent implements OnInit {
  @Input() changeFlag: boolean;

  shoppingItems: ShoppingItem[];
  tempArray: ShoppingItem[];

  shoppingListForm: FormGroup;

  id:number = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

  constructor(
    private route: ActivatedRoute,
    private shoppingService: ShoppingService,
    private router: Router,
    public fb: FormBuilder,
  ) {
    this.shoppingListForm = this.fb.group({
      shopping_list_id: [this.id],
    })
  }

  ngOnInit(): void {
    this.getShoppingItems();
  }

  getShoppingItems(): void {
    this.shoppingService.getShoppingList(this.id).subscribe(
      result => {
        this.shoppingItems = result.shopping_items;
        // console.log(this.shoppingItems);
      },
      error => {
        console.log(error.error);
      }
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getShoppingItems();
  }

  deleteShoppingItem(shoppingItem: ShoppingItem):void {
    this.shoppingItems = this.shoppingItems.filter(item => item !== shoppingItem);
    this.shoppingService.deleteShoppingItem(shoppingItem.id).subscribe();
  }

  onSubmit() {
    // console.log(this.shoppingListForm.value);
    this.shoppingService.batchRegister(this.shoppingListForm.value).subscribe(
      result => {
        // console.log(this.shoppingItems);
      },
      error => {
        console.log(error.error);
      },
      () => {
        this.router.navigate(['/manage']);
      }
    );
  }
}
