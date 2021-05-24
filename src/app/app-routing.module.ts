import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ManageCreateComponent } from './manage/manage-create/manage-create.component';
import { ManageDetailComponent } from './manage/manage-detail/manage-detail.component';
import { ManageEditComponent } from './manage/manage-edit/manage-edit.component';
import { ManageListComponent } from './manage/manage-list/manage-list.component';
import { CategoryDetailComponent } from './master/category-detail/category-detail.component';
import { FoodDetailComponent } from './master/food-detail/food-detail.component';
import { MasterComponent } from './master/master.component';
import { ShoppingCreateComponent } from './shopping/shopping-create/shopping-create.component';
import { ShoppingDetailComponent } from './shopping/shopping-detail/shopping-detail.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { SignupComponent } from './signup/signup.component';
import { TopPageComponent } from './top-page/top-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: TopPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'profile',
    component: UserProfileComponent
  },
  {
    path: 'masters',
    component: MasterComponent
  },
  {
    path: 'masters/category/:id',
    component: CategoryDetailComponent
  },
  {
    path: 'masters/food/:id',
    component: FoodDetailComponent
  },
  {
    path: 'manage',
    component: ManageListComponent
  },
  {
    path: 'manage/create',
    component: ManageCreateComponent
  },
  {
    path: 'manage/:id',
    component: ManageDetailComponent
  },
  {
    path: 'manage/:id/edit',
    component: ManageEditComponent
  },
  {
    path: 'shopping',
    component: ShoppingListComponent
  },
  {
    path: 'shopping/create',
    component: ShoppingCreateComponent
  },
  {
    path: 'shopping/:id',
    component: ShoppingDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
