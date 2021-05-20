import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';

import { AuthInterceptor } from './shared/auth.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TopPageComponent } from './top-page/top-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MasterComponent } from './master/master.component';
import { CategoryComponent } from './master/category/category.component';
import { FoodComponent } from './master/food/food.component';
import { CategoryDetailComponent } from './master/category-detail/category-detail.component';
import { FoodDetailComponent } from './master/food-detail/food-detail.component';
import { ManageListComponent } from './manage/manage-list/manage-list.component';
import { ManageDetailComponent } from './manage/manage-detail/manage-detail.component';
import { ManageCreateComponent } from './manage/manage-create/manage-create.component';
import { ManageEditComponent } from './manage/manage-edit/manage-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TopPageComponent,
    NavbarComponent,
    UserProfileComponent,
    MasterComponent,
    CategoryComponent,
    FoodComponent,
    CategoryDetailComponent,
    FoodDetailComponent,
    ManageListComponent,
    ManageDetailComponent,
    ManageCreateComponent,
    ManageEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
