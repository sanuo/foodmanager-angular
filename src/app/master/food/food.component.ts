import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/model/food.model';
import { MasterService } from 'src/app/shared/master/master.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  foods: Food[];

  constructor(
    private masterService: MasterService,
  ) { }

  ngOnInit(): void {
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
  }

}
