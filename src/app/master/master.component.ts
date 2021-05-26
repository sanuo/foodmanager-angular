import { Component, OnInit } from '@angular/core';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {
  
  // fontawsome
  faCogs = faCogs;

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
