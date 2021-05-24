import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { Food } from 'src/app/model/food.model';
import { ShoppingItem } from 'src/app/model/shopping-item.model';
import { MasterService } from 'src/app/shared/master/master.service';
import { ShoppingService } from 'src/app/shared/shopping/shopping.service';

@Component({
  selector: 'app-shopping-item-edit',
  templateUrl: './shopping-item-edit.component.html',
  styleUrls: ['./shopping-item-edit.component.scss']
})
export class ShoppingItemEditComponent implements OnInit {

  shoppingItem: ShoppingItem;
  
  categories: Category[];
  foods: Food[];

  id:number = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

  shoppingItemForm: FormGroup;

  status_lists = [
    {
      status: 0,
      status_label: '未購入'
    },
    {
      status: 1,
      status_label: '購入済'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shoppingService: ShoppingService,
    private masterService: MasterService,
    public fb: FormBuilder,
  ) {
    this.shoppingItemForm = this.fb.group({
      shopping_list_id: [''],
      category_master_id: [''],
      food_master_id: [''],
      quantity: [''],
      unit: [''],
      status: ['']
    })
  }

  ngOnInit(): void {
    this.getShoppingItem();

    // 登録済みのカテゴリーマスター取得
    this.masterService.getCategories().subscribe((data:any) => {
      this.categories = data;
    })
  }

  getShoppingItem(): void {
    this.shoppingService.getShoppingItem(this.id).subscribe(
      result => {
        this.shoppingItem = result;
        this.getFoodsByCategoryId(this.shoppingItem?.category_master_id);
      },
      error => {
        console.log(error.error);
      }
    );
  }

  // 食材マスターの初期値取得
  getFoodsByCategoryId(category_id: number) {
    this.masterService.getFoodsByCategoryId(category_id).subscribe(
      result => {
        this.foods = result;
      },
      error => {
        console.log(error.error);
      }
    );
  }

  setFoodMasters(value?: any) {
    if(value) {
      this.masterService.getFoodsByCategoryId(parseInt(value.value)).subscribe(
        result => {
          this.foods = result;
        },
        error => {
          console.log(error.error);
        }
      );
    }
  }
  
  onSubmit() {
    this.shoppingService.updateShoppingItem(this.id, this.shoppingItemForm.value).subscribe(
      result => {
        // console.log(result)
      },
      error => {
        // this.errors = error.error;
        console.log(error.error);
      },
      () => {
        this.router.navigate(['/shopping/', this.shoppingItemForm.value.shopping_list_id]);
      }
    )
  }
}
