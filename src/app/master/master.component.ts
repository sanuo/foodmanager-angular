import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  changeFlag = true;

  change() {
    if(this.changeFlag) {
      this.changeFlag = false;
    } else {
      this.changeFlag = true;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
