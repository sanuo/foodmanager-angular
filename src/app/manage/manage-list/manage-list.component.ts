import { Component, OnInit } from '@angular/core';
import { FoodManage } from 'src/app/model/food-manage.model';
import { FoodManageService } from 'src/app/shared/food-manage/food-manage.service';

@Component({
  selector: 'app-manage-list',
  templateUrl: './manage-list.component.html',
  styleUrls: ['./manage-list.component.scss']
})
export class ManageListComponent implements OnInit {

  foodManages: FoodManage[];

  constructor(
    private foodManageService: FoodManageService
  ) { }

  ngOnInit(): void {
    // 登録済みの食材管理データを取得
    this.foodManageService.getFoodManages().subscribe((data:any) => {
      this.foodManages = data;
    })
  }

  deleteFoodManage(foodManage: FoodManage):void {
    this.foodManages = this.foodManages.filter(item => item !== foodManage);
    this.foodManageService.deleteFoodManage(foodManage.id).subscribe();
  }
}
