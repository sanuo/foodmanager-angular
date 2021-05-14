import { Component } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'foodmanager-angular';

  //testAPI
  onClickCallTestApi() {
    axios.get("http://127.0.0.1:8000/api/mytest")
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
    // console.log('api test')
  }
}
