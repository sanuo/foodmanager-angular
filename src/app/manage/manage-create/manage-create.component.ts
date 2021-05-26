import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Category } from 'src/app/model/category.model';
import { FoodManage } from 'src/app/model/food-manage.model';
import { Food } from 'src/app/model/food.model';
import { FoodManageService } from 'src/app/shared/food-manage/food-manage.service';
import { MasterService } from 'src/app/shared/master/master.service';

@Component({
  selector: 'app-manage-create',
  templateUrl: './manage-create.component.html',
  styleUrls: ['./manage-create.component.scss']
})
export class ManageCreateComponent implements OnInit {
  // fontawsome
  faUtensils = faUtensils;

  foodManage: FoodManage;
  foodManageForm: FormGroup;
  categoryForm: FormGroup;
  foodForm: FormGroup;

  categoryNew: boolean = false;
  foodNew: boolean = false;


  categories: Category[];
  foods: Food[];
  
  value;
  constructor(
    public fb: FormBuilder,
    private masterService: MasterService,
    private foodManageService: FoodManageService,
    private router: Router,
  ) {
    this.foodManageForm = this.fb.group({
      category_master_id: ['', [Validators.required]],
      food_master_id: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      unit: [''],
      expiration_date: [''],
    })
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
    this.foodManageService.storeFoodManage(this.foodManageForm.value).subscribe(
      result => {
        // console.log(result)
      },
      error => {
        console.log(error.error);
      },
      () => {
        this.router.navigate(['/manage']);
      }
    )
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
        this.foodManageForm.setValue({
          category_master_id: result.id,
          food_master_id: null,
          quantity: null,
          unit: null,
          expiration_date: null,
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
      category_master_id: this.foodManageForm.value.category_master_id,
      name: this.foodForm.value.name
    });
    this.masterService.storeFood(this.foodForm.value).subscribe(
      result => {
        this.foods.push(result);
        this.foodNew = false;
        this.foodManageForm.setValue({
          category_master_id: result.category_master_id,
          food_master_id: result.id,
          quantity: null,
          unit: null,
          expiration_date: null,
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

  formatLabel(value: number) {
    return value;
  }
}
