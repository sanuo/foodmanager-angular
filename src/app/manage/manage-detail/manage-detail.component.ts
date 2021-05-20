import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodManage } from 'src/app/model/food-manage.model';
import { FoodManageService } from 'src/app/shared/food-manage/food-manage.service';

@Component({
  selector: 'app-manage-detail',
  templateUrl: './manage-detail.component.html',
  styleUrls: ['./manage-detail.component.scss']
})
export class ManageDetailComponent implements OnInit {

  foodManage: FoodManage;

  id:number = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private foodManageService: FoodManageService
  ) { }

  ngOnInit(): void {
    this.getFoodManage();
  }

  getFoodManage(): void {
    this.foodManageService.getFoodManage(this.id).subscribe(
      result => {
        this.foodManage = result;
      },
      error => {
        console.log(error.error);
      }
    );
  }

  deleteFoodManage():void {
    if (confirm('本当に削除しますか？削除したデータは復旧できません。')) {
      this.foodManageService.deleteFoodManage(this.id).subscribe(() => { this.router.navigate(['/manage']); })
    }
  }
}
