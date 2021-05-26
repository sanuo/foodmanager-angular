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
import { ShoppingItemEditComponent } from './shopping/shopping-detail/shopping-item-edit/shopping-item-edit.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { SignupComponent } from './signup/signup.component';
import { TopPageComponent } from './top-page/top-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { AuthGuard } from './guard/auth.guard';
import { LoginGuard } from './guard/login.guard';

const routes: Routes = [
  {
    path: '',
    component: TopPageComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'masters',
    component: MasterComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'masters/category/:id',
    component: CategoryDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'masters/food/:id',
    component: FoodDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manage',
    component: ManageListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manage/create',
    component: ManageCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manage/:id',
    component: ManageDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manage/:id/edit',
    component: ManageEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'shopping',
    component: ShoppingListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'shopping/create',
    component: ShoppingCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'shopping/:id',
    component: ShoppingDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'shopping/:id/edit',
    component: ShoppingEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'shopping/item/:id/edit',
    component: ShoppingItemEditComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
