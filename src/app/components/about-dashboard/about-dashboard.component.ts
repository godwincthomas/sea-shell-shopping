import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/route-animate';

@Component({
  selector: 'app-about-dashboard',
  templateUrl: './about-dashboard.component.html',
  styleUrls: ['./about-dashboard.component.css'],
  animations: [slideInAnimation]
})
export class AboutDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
