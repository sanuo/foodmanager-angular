import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { FoodManage } from 'src/app/model/food-manage.model';
import { Food } from 'src/app/model/food.model';
import { FoodManageService } from 'src/app/shared/food-manage/food-manage.service';
import { MasterService } from 'src/app/shared/master/master.service';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-manage-edit',
  templateUrl: './manage-edit.component.html',
  styleUrls: ['./manage-edit.component.scss']
})
export class ManageEditComponent implements OnInit {
  // fontawsome
  faUtensils = faUtensils;

  foodManage: FoodManage;
  
  categories: Category[];
  foods: Food[];

  id:number = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

  foodManageForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private foodManageService: FoodManageService,
    private masterService: MasterService,
    public fb: FormBuilder,
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
    this.getFoodManage();

    // 登録済みのカテゴリーマスター取得
    this.masterService.getCategories().subscribe((data:any) => {
      this.categories = data;
    })
  }

  getFoodManage(): void {
    this.foodManageService.getFoodManage(this.id).subscribe(
      result => {
        this.foodManage = result;
        this.getFoodsByCategoryId(this.foodManage?.category_master_id);
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
    this.foodManageService.updateFoodManage(this.id, this.foodManageForm.value).subscribe(
      result => {
        // console.log(result)
      },
      error => {
        // this.errors = error.error;
        console.log(error.error);
      },
      () => {
        this.router.navigate(['/manage']);
      }
    )
  }
}
