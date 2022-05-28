import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/route-animate';
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [slideInAnimation]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
