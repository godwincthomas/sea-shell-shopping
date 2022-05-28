import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/route-animate';

@Component({
  selector: 'app-blog-dashboard',
  templateUrl: './blog-dashboard.component.html',
  styleUrls: ['./blog-dashboard.component.css'],
  animations: [slideInAnimation]
})
export class BlogDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
