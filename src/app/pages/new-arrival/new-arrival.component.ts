import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.css']
})
export class NewArrivalComponent implements OnInit {

  constructor(private httpClient: HttpClient,) { }
  ProductList: any = []
  seashell: any = []
  newarrivel: any = []
  ngOnInit() {
    this.httpClient.get('/assets/json/seashell.json').subscribe(data => {
      this.ProductList = data;
      this.seashell = this.ProductList[0].seashell
      this.newarrivel = this.ProductList[1].newupdatedproducts
      // debugger
    })
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    navSpeed: 700,
    navText: ['<i class="fa fa-chevron-left c-black"></i>', '<i class="fa fa-chevron-right c-black"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
