import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { MasterService } from 'src/app/shared/master/master.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {
  
  category: Category;

  id:number = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

  categoryForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private masterService: MasterService,
    public fb: FormBuilder,
  ) {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(): void {
    this.masterService.getCategory(this.id).subscribe(
      result => {
        this.category = result;
      },
      error => {
        console.log(error.error);
      }
    );
  }

  onSubmit() {
    this.masterService.updateCategory(this.id, this.categoryForm.value).subscribe(
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

  deleteCategory():void {
    if (confirm('本当に削除しますか？削除したデータは復旧できません。')) {
      this.masterService.deleteCategory(this.id).subscribe(() => { this.router.navigate(['/masters']); })
    }
  }

}
