import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingList } from 'src/app/model/shopping-list.model';
import { ShoppingService } from 'src/app/shared/shopping/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  shoppingList: ShoppingList;

  id:number = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

  shoppingListForm: FormGroup;

  status_lists = [
    {
      status: 0,
      status_label: '未登録'
    },
    {
      status: 1,
      status_label: '登録済'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shoppingService: ShoppingService,
    public fb: FormBuilder,
  ) {
    this.shoppingListForm = this.fb.group({
      title: [''],
      status: [''],
    })
  }

  ngOnInit(): void {
    this.getShoppingList();

    this.status_lists = [
      {
        status: 0,
        status_label: '未登録'
      },
      {
        status: 1,
        status_label: '登録済'
      }
    ];
  }

  getShoppingList(): void {
    this.shoppingService.getShoppingList(this.id).subscribe(
      result => {
        this.shoppingList = result.shopping_list;
      },
      error => {
        console.log(error.error);
      }
    );
  }

  onSubmit() {
    this.shoppingService.updateShoppingList(this.id, this.shoppingListForm.value).subscribe(
      result => {
        // console.log(result)
      },
      error => {
        // this.errors = error.error;
        console.log(error.error);
      },
      () => {
        this.router.navigate(['/shopping']);
      }
    )
  }

  deleteShoppingList():void {
    if (confirm('本当に削除しますか？削除したデータは復旧できません。')) {
      this.shoppingService.deleteShoppingList(this.id).subscribe(() => { this.router.navigate(['/shopping']); })
    }
  }
}
