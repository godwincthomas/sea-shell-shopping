import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DatatransferService } from 'src/app/services/datatransfer.service';
import { NotificationService } from 'src/app/services/notification.service';
declare var $: any;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router, private getdata: DatatransferService,
  private notifyService: NotificationService) { }
  ProductList: any = []
  seashellList: any = []
  pushSeaShell = []
  SeaShellArray:any=[]
  pearlsList: any = []
  pushpearls = []
  PearlsArray:any=[]
  spiritualList: any = []
  pushspiritual = []
  SpiritualArray:any=[]
  ngOnInit() {
    this.httpClient.get('/assets/json/prod_list.json').subscribe(data => {
      this.ProductList = data;      
      this.SeaShellArray = this.ProductList[0].products            
      this.PearlsArray = this.ProductList[1].products
      this.SpiritualArray = this.ProductList[2].products
      // this.seashellList = this.ProductList[0].seashell
      // for (let i = 0; i < this.seashellList.length; i++) {
      //   var dataList = this.seashellList[i]        
      //   if (i <= 2) {
      //     this.pushSeaShell.push(dataList)
      //     this.SeaShellArray=this.pushSeaShell
      //     console.log(this.SeaShellArray)
      //   }else{

      //   }
      // }
      // this.pearlsList = this.ProductList[1].pearls
      // for (let i = 0; i < this.pearlsList.length; i++) {
      //   var dataList = this.pearlsList[i]        
      //   if (i <= 2) {
      //     this.pushpearls.push(dataList)
      //     this.PearlsArray=this.pushpearls
      //     console.log(this.PearlsArray)
      //   }else{

      //   }
      // }
      // this.spiritualList = this.ProductList[2].spiritualitem
      // for (let i = 0; i < this.spiritualList.length; i++) {
      //   var dataList = this.spiritualList[i]        
      //   if (i <= 2) {
      //     this.pushspiritual.push(dataList)
      //     this.SpiritualArray=this.pushspiritual
      //     console.log(this.SpiritualArray)
      //   }else{

      //   }
      // }
    })
    // this.allopen()
  }
  buyNowBtn(id,name){ 
    this.getdata.buyNow(id,name)
  }
  addcard() {
    this.notifyService.showSuccess("Add-to-card successfully !!", "")
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    navSpeed: 700,
    // ['<i class="fa fa-chevron-left c-black"></i>', '<i class="fa fa-chevron-right c-black"></i>']
    // navText:[],
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
    nav: false
  }
  // seashell: any
  // pearls: any
  // spiritual: any
  // allopen() {
  //   $(".btn1").addClass("tog-active");
  //   $(".btn2").removeClass("tog-active");
  //   $(".btn3").removeClass("tog-active");
  //   $(".btn4").removeClass("tog-active");
  //   this.seashell = 'show'
  //   this.pearls = 'show'
  //   this.spiritual = 'show'
  // }
  // seashellopen() {
  //   $(".btn1").removeClass("tog-active");
  //   $(".btn2").addClass("tog-active");
  //   $(".btn3").removeClass("tog-active");
  //   $(".btn4").removeClass("tog-active");
  //   this.seashell = 'show'
  //   this.pearls = ''
  //   this.spiritual = ''
  //   window.scroll(0, 550)
  // }
  // pearlsopen() {
  //   $(".btn1").removeClass("tog-active");
  //   $(".btn2").removeClass("tog-active");
  //   $(".btn3").addClass("tog-active");
  //   $(".btn4").removeClass("tog-active");
  //   this.seashell = ''
  //   this.pearls = 'show'
  //   this.spiritual = ''
  //   window.scroll(0, 550)
  // }
  // spiritualopen() {
  //   $(".btn1").removeClass("tog-active");
  //   $(".btn2").removeClass("tog-active");
  //   $(".btn3").removeClass("tog-active");
  //   $(".btn4").addClass("tog-active");
  //   this.seashell = ''
  //   this.pearls = ''
  //   this.spiritual = 'show'
  //   window.scroll(0, 550)
  // }

}
