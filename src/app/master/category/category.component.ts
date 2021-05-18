import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from 'src/app/model/category.model';
import { MasterService } from 'src/app/shared/master/master.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  
  categories: Category[];

  categoryForm: FormGroup;

  constructor(
    private masterService: MasterService,
    public fb: FormBuilder,
  ) {
    this.categoryForm = this.fb.group({
      name: [''],
    })
  }

  ngOnInit(): void {
    this.masterService.getCategories().subscribe((data:any) => {
      this.categories = data;
    })
  }

  onSubmit() {
    this.masterService.storeCategory(this.categoryForm.value).subscribe(
      result => {
        // console.log(result)
        this.categories.push(result);
      },
      error => {
        // this.errors = error.error;
        console.log(error.error);
      }
    )
  }

}
