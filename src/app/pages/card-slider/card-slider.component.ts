import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatatransferService } from 'src/app/services/datatransfer.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $: any;
@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.css']
})
export class CardSliderComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router, private getdata: DatatransferService) { }
  ProductList: any = []
  seashell: any = []
  pearlsproduct: any = []
  spiritualproduct: any = []
  newarrivel: any = []
  ngOnInit() {
    this.httpClient.get('/assets/json/products.json').subscribe(data => {
      this.ProductList = data;
      this.seashell = this.ProductList[0].seashell
      this.pearlsproduct = this.ProductList[1].pearls
      this.spiritualproduct = this.ProductList[2].spiritualitem
    })
    this.allopen()
  }
  seashellshow: any
  pearls: any
  spiritual: any
  allopen() {
    $(".btn1").addClass("tog-active");
    $(".btn2").removeClass("tog-active");
    $(".btn3").removeClass("tog-active");
    $(".btn4").removeClass("tog-active");
    this.seashellshow = 'show'
    this.pearls = 'show'
    this.spiritual = 'show'
    // window.scroll(0, 550)
  }
  seashellopen() {
    $(".btn1").removeClass("tog-active");
    $(".btn2").addClass("tog-active");
    $(".btn3").removeClass("tog-active");
    $(".btn4").removeClass("tog-active");
    this.seashellshow = 'show'
    this.pearls = ''
    this.spiritual = ''
    window.scroll(0, 550)
  }
  pearlsopen() {
    $(".btn1").removeClass("tog-active");
    $(".btn2").removeClass("tog-active");
    $(".btn3").addClass("tog-active");
    $(".btn4").removeClass("tog-active");
    this.seashellshow = ''
    this.pearls = 'show'
    this.spiritual = ''
    window.scroll(0, 550)
  }
  spiritualopen() {
    $(".btn1").removeClass("tog-active");
    $(".btn2").removeClass("tog-active");
    $(".btn3").removeClass("tog-active");
    $(".btn4").addClass("tog-active");
    this.seashellshow = ''
    this.pearls = ''
    this.spiritual = 'show'
    window.scroll(0, 550)
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
