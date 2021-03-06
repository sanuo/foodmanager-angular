import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ShoppingService } from 'src/app/shared/shopping/shopping.service';

@Component({
  selector: 'app-shopping-create',
  templateUrl: './shopping-create.component.html',
  styleUrls: ['./shopping-create.component.scss']
})
export class ShoppingCreateComponent implements OnInit {

  shoppingListForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private shoppingService: ShoppingService,
    private router: Router,
  ) {
    this.shoppingListForm = this.fb.group({
      title: [''],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.shoppingService.storeShoppingList(this.shoppingListForm.value).subscribe(
      result => {
        // console.log(result)
      },
      error => {
        console.log(error.error);
      },
      () => {
        this.router.navigate(['/shopping']);
      }
    )
  }
}
