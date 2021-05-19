import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from 'src/app/model/category.model';
import { Food } from 'src/app/model/food.model';
import { MasterService } from 'src/app/shared/master/master.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  foods: Food[];
  categories: Category[];

  foodForm: FormGroup;

  constructor(
    private masterService: MasterService,
    public fb: FormBuilder,
  ) {
    this.foodForm = this.fb.group({
      name: [''],
      category_master_id: ['']
    })
  }

  ngOnInit(): void {
    // 登録済みのフードマスター取得
    this.masterService.getFoods().subscribe((data:any) => {
      data.forEach(element => {
        this.masterService.getCategory(element.category_master_id).subscribe(
          (data:any) => {
            element["category_master_name"] = data.name;
          }
        )
      });
      // console.dir(data);
      this.foods = data;
    })
    
    // 登録済みのカテゴリーマスター取得
    this.masterService.getCategories().subscribe((data:any) => {
      this.categories = data;
      // console.dir(data);
    })
  }

  onSubmit() {
    this.masterService.storeFood(this.foodForm.value).subscribe(
      result => {
        console.log(result.id)
        this.masterService.getCategory(result.category_master_id).subscribe(
          (data:any) => {
            result["category_master_name"] = data.name;
          }
        )
        this.foods.push(result);
      },
      error => {
        // this.errors = error.error;
        console.log(error.error);
      }
    )
  }

}
