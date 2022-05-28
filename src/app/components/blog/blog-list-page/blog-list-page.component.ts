import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list-page',
  templateUrl: './blog-list-page.component.html',
  styleUrls: ['./blog-list-page.component.css']
})
export class BlogListPageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  viewBlog() {
    this.router.navigateByUrl('/shell/blog-dashboard/blog-detail')
  }
}
