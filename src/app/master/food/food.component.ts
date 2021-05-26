import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/model/category.model';
import { Food } from 'src/app/model/food.model';
import { MasterService } from 'src/app/shared/master/master.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  @Input() changeFlag: boolean;

  foods: Food[];
  categories: Category[];

  foodForm: FormGroup;

  constructor(
    private masterService: MasterService,
    public fb: FormBuilder,
  ) {
    this.foodForm = this.fb.group({
      name: ['', [Validators.required]],
      category_master_id: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    // 登録済みのフードマスター取得
    this.masterService.getFoods().subscribe((data:any) => {
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
    // console.log(this.foodForm.value)
    this.masterService.storeFood(this.foodForm.value).subscribe(
      result => {
        this.foodForm.reset({
          category_master_id: result.category_master_id,
          name: null
        });
        this.foods.push(result);
      },
      error => {
        // this.errors = error.error;
        console.log(error.error);
      }
    )
  }

  ngOnChanges(changes: SimpleChanges) {
    // 別コンポーネントの変化を検知して登録済みのカテゴリーマスター取得
    this.masterService.getCategories().subscribe((data:any) => {
      this.categories = data;
      // console.dir(data);
    })
    // 登録済みのフードマスター取得
    this.masterService.getFoods().subscribe((data:any) => {
      // console.dir(data);
      this.foods = data;
    })
  }

  deleteFood(food: Food):void {
    if (confirm('本当に削除しますか？削除したデータは復旧できません。')) {
      this.foods = this.foods.filter(item => item !== food);
      this.masterService.deleteFood(food.id).subscribe();
    }
  }
}
