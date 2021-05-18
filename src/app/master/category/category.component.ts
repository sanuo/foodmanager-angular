import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { MasterService } from 'src/app/shared/master/master.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories: Category[];

  constructor(
    private masterService: MasterService,
  ) { }

  ngOnInit(): void {
    this.masterService.getCategories().subscribe((data:any) => {
      this.categories = data;
    })
  }

}
