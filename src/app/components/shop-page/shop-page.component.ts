import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { filter } from 'rxjs/operators';
import { DatatransferService } from 'src/app/services/datatransfer.service';
import { NotificationService } from 'src/app/services/notification.service';
declare var $: any;
@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router, private getdata: DatatransferService,
    private route: ActivatedRoute, private notifyService: NotificationService) { }
  ProductList: any = []
  seashellList: any = []
  pearlsList: any = []
  spiritualList: any = []
  foursame: any
  sixsame: any
  seashell: any
  pearls: any
  spiritual: any
  product_Name: any
  ngOnInit() {
    this.httpClient.get('/assets/json/prod_list.json').subscribe(data => {
      this.ProductList = data;          
      this.seashellList = this.ProductList[0].products
      this.seashell = 'show'
      this.pearls = ''
      this.spiritual = ''  
    })
    this.route.queryParams.pipe(filter(params => params.name))
      .subscribe(params => {
        this.product_Name = params.name;        
        this.httpClient.get('/assets/json/prod_list.json').subscribe(data => {
          this.ProductList = data;          
          if (this.product_Name == "seashell") {
            this.seashellList = this.ProductList[0].products
            this.seashell = 'show'
            this.pearls = ''
            this.spiritual = ''            
          } else if (this.product_Name == "handicrafts") {
            this.seashellList = this.ProductList[1].products
            this.seashell = ''
            this.pearls = 'show'
            this.spiritual = ''            
          } else if (this.product_Name == "Spiritual") {
            this.seashellList = this.ProductList[2].products
            this.seashell = ''
            this.pearls = ''
            this.spiritual = 'show'            
          }
        })
      })

    this.foursameclick()   
  }
  buyNowBtn(id,name){
    this.getdata.buyNow(id,name)
  }
  addcard() {
    this.notifyService.showSuccess("Add-to-card successfully !!", "")
  }
  categorylist(value) {
    var name = value
    if (name == "all") {
      this.seashell = 'show'
      this.pearls = 'show'
      this.spiritual = 'show'
    } else if (name == "seashell") {
      this.seashell = 'show'
      this.pearls = ''
      this.spiritual = ''
    } else if (name == "pearls") {
      this.seashell = ''
      this.pearls = 'show'
      this.spiritual = ''
    } else if (name == "spiritualitams") {
      this.seashell = ''
      this.pearls = ''
      this.spiritual = 'show'
    } else {

    }
  }
  foursameclick() {
    this.foursame = 'show'
    this.sixsame = ''

    $(".threesameone").addClass("activecolor");
    $(".foursameone").removeClass("activecolor");
  }
  sixsameclick() {
    this.foursame = ''
    this.sixsame = 'show'
    $(".threesameone").removeClass("activecolor");
    $(".foursameone").addClass("activecolor");
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
