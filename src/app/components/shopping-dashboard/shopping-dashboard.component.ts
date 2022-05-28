import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/route-animate';

@Component({
  selector: 'app-shopping-dashboard',
  templateUrl: './shopping-dashboard.component.html',
  styleUrls: ['./shopping-dashboard.component.css'],
  animations: [slideInAnimation]
})
export class ShoppingDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
