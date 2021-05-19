import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { Food } from 'src/app/model/food.model';
import { MasterService } from 'src/app/shared/master/master.service';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss']
})
export class FoodDetailComponent implements OnInit {

  food: Food;
  categories: Category[];

  id:number = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

  foodForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private masterService: MasterService,
    public fb: FormBuilder,
  ) {
    this.foodForm = this.fb.group({
      name: [''],
      category_master_id: ['']
    })
  }

  ngOnInit(): void {
    this.getFood();
    // 登録済みのカテゴリーマスター取得
    this.masterService.getCategories().subscribe((data:any) => {
      this.categories = data;
      // console.dir(data);
    })
  }

  getFood(): void {
    this.masterService.getFood(this.id).subscribe(
      result => {
        this.masterService.getCategory(result.category_master_id).subscribe(
          (data:any) => {
            result["category_master_name"] = data.name;
          }
        )
        this.food = result;
      },
      error => {
        console.log(error.error);
      }
    );
  }

  onSubmit() {
    this.masterService.updateFood(this.id, this.foodForm.value).subscribe(
      result => {
        // console.log(result)
        // this.categories.push(result);
      },
      error => {
        // this.errors = error.error;
        console.log(error.error);
      },
      () => {
        this.router.navigate(['/masters']);
      }
    )
  }

  deleteFood():void {
    if (confirm('本当に削除しますか？削除したデータは復旧できません。')) {
      this.masterService.deleteFood(this.id).subscribe(() => { this.router.navigate(['/masters']); })
    }
  }

}
