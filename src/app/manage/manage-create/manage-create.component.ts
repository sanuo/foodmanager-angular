import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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

  foodManage: FoodManage;
  foodManageForm: FormGroup;

  categories: Category[];
  foods: Food[];

  selectedValue = 0;

  constructor(
    public fb: FormBuilder,
    private masterService: MasterService,
    private foodManageService: FoodManageService,
    private router: Router,
  ) {
    this.foodManageForm = this.fb.group({
      category_master_id: [''],
      food_master_id: [''],
      quantity: [''],
      unit: [''],
      expiration_date: [''],
    })
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
}
