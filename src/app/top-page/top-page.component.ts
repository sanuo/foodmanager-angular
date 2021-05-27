import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { AuthStateService } from '../shared/auth-state.service';
import { AuthService } from '../shared/auth.service';
import { faUtensils, faShoppingBasket, faCogs, faCarrot, faStopwatch, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FoodManage } from '../model/food-manage.model';
import { FoodManageService } from '../shared/food-manage/food-manage.service';
import { ConditionalExpr } from '@angular/compiler';


@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss']
})
export class TopPageComponent implements OnInit {
  
  // fontawsome
  faCarrot = faCarrot;
  faUtensils = faUtensils;
  faShoppingBasket = faShoppingBasket;
  faCogs = faCogs;
  faStopwatch = faStopwatch;
  faExclamationTriangle = faExclamationTriangle;

  isSignedIn: boolean;

  UserProfile: User;

  foodManages: FoodManage[];

  today: Date;

  constructor(
    private auth: AuthStateService,
    private authService: AuthService,
    private foodManageService: FoodManageService
  ) {
  }

  ngOnInit(): void {
    this.auth.userAuthState.subscribe(val => {
      this.isSignedIn = val;
    });

    if(this.isSignedIn) {
      this.authService.profileUser().subscribe((data:any) => {
        this.UserProfile = data;
      })
    }
    this.getRemindFoods();
    this.today = new Date();
  }

  getRemindFoods() {
    this.foodManageService.getFoodManagesForReminder().subscribe((data:any) => {
      if(data.length != 0) {
        this.foodManages = data;
      }
      console.dir(this.foodManages);
    })
  }
}
