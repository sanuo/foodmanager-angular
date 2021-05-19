import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CategoryDetailComponent } from './master/category-detail/category-detail.component';
import { FoodDetailComponent } from './master/food-detail/food-detail.component';
import { MasterComponent } from './master/master.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
