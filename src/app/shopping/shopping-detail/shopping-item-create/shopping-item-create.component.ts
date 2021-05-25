import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { Food } from 'src/app/model/food.model';
import { MasterService } from 'src/app/shared/master/master.service';
import { ShoppingService } from 'src/app/shared/shopping/shopping.service';

@Component({
  selector: 'app-shopping-item-create',
  templateUrl: './shopping-item-create.component.html',
  styleUrls: ['./shopping-item-create.component.scss']
})
export class ShoppingItemCreateComponent implements OnInit {

  @Output() changeEvent = new EventEmitter<string>();

  shoppingItemForm: FormGroup;
  categoryForm: FormGroup;
  foodForm: FormGroup;

  categories: Category[];
  foods: Food[];

  id:number = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

  categoryNew: boolean = false;
  foodNew: boolean = false;

  constructor(
    public fb: FormBuilder,
    private masterService: MasterService,
    private shoppingService: ShoppingService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.shoppingItemForm = this.fb.group({
      shopping_list_id: [this.id],
      category_master_id: [''],
      food_master_id: [''],
      quantity: [''],
      unit: [''],
      status: ['']
    });
    this.categoryForm = this.fb.group({
      name: [''],
    });
    this.foodForm = this.fb.group({
      name: [''],
      category_master_id: ['']
    });
  }

  ngOnInit(): void {
    this.getCategories();
  }

  onSubmit() {
    console.dir(this.shoppingItemForm.value);
    this.shoppingService.storeShoppingItem(this.shoppingItemForm.value).subscribe(
      result => {
        // console.log(result)
        this.changeFlag();
      },
      error => {
        console.log(error.error);
      },
      () => {
        // this.router.navigate(['/shopping']);
      }
    )
  }

  changeFlag() {
    this.changeEvent.emit();
  }

  // セレクト要素用のカテゴリー一覧を取得
  getCategories() {
    this.masterService.getCategories().subscribe(
      result => {
        this.categories = result;
        this.setFoodMasters(this.categories);
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

  getCategoryChange(value?: any) {
    if (value.value == 'new') {
      this.categoryNew = true;
    } else {
      this.categoryNew = false;
    }
  }

  getFoodChange(value?: any) {
    if (value.value == 'new') {
      this.foodNew = true;
    } else {
      this.foodNew = false;
    }
  }

  newCategory() {
    this.masterService.storeCategory(this.categoryForm.value).subscribe(
      result => {
        this.getCategories();
        this.categoryNew = false;
        this.shoppingItemForm.setValue({
          shopping_list_id: this.id,
          category_master_id: result.id,
          food_master_id: null,
          quantity: null,
          unit: null,
          status: null,
        });
      },
      error => {
        console.log(error.error);
      },
      () => {
        // this.router.navigate(['/shopping']);
      }
    )
  }

  newFood() {
    this.foodForm.setValue({
      category_master_id: this.shoppingItemForm.value.category_master_id,
      name: this.foodForm.value.name
    });
    this.masterService.storeFood(this.foodForm.value).subscribe(
      result => {
        this.foods.push(result);
        this.foodNew = false;
        this.shoppingItemForm.setValue({
          shopping_list_id: this.id,
          category_master_id: result.category_master_id,
          food_master_id: result.id,
          quantity: null,
          unit: null,
          status: null,
        });
      },
      error => {
        console.log(error.error);
      },
      () => {
        // this.router.navigate(['/shopping']);
      }
    )
  }
}
