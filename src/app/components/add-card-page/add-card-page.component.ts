import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatatransferService } from 'src/app/services/datatransfer.service';
import { NotificationService } from 'src/app/services/notification.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { filter } from 'rxjs/operators';
declare var $: any;
@Component({
  selector: 'app-add-card-page',
  templateUrl: './add-card-page.component.html',
  styleUrls: ['./add-card-page.component.css']
})
export class AddCardPageComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute,
    private getdata: DatatransferService, private notifyService: NotificationService) { }
  ProductList: any = []
  GetProduct: any = []
  prodId: any
  cateName: any
  disData: any = []
  quantitySize: any = []
  quantityKg: any = []
  ngOnInit() {

    this.route.queryParams.pipe(filter(params => params._id))
      .subscribe(params => {
        var _id: number = +params._id
        this.prodId = _id
        this.cateName = params.cateName
      })
    this.httpClient.get('/assets/json/prod_list.json').subscribe(data => {
      this.ProductList = data;
      if (this.cateName == "seashell") {
        this.GetProduct = this.ProductList[0].products
        for (let i = 0; i < this.GetProduct.length; i++) {
          var _id = this.GetProduct[i].id
          if (_id == this.prodId) {
            this.disData = this.GetProduct[i]
            this.quantitySize = this.disData.quantitySize
            this.quantityKg = this.disData.quantityKg
           this.selectSize(0)
          }
        }
      } else if (this.cateName == "handicrafts") {
        this.GetProduct = this.ProductList[1].products

        for (let i = 0; i < this.GetProduct.length; i++) {
          var _id = this.GetProduct[i].id
          if (_id == this.prodId) {
            this.disData = this.GetProduct[i]

          }
        }
      } else if (this.cateName == "spritual") {
        this.GetProduct = this.ProductList[2].products

        for (let i = 0; i < this.GetProduct.length; i++) {
          var _id = this.GetProduct[i].id
          if (_id == this.prodId) {
            this.disData = this.GetProduct[i]

          }
        }
      }
    })


  }
  activeBtn: any
  selectSize(i) {
    $(this.activeBtn).removeClass("acticeSize")
    this.activeBtn = ".active" + i
    $(this.activeBtn).addClass("acticeSize")    
  }
  // count=1
  setvalue = 1
  count = 1
  addcount(id) {
    var number = id
    var add = number + this.count
    this.setvalue = add
  }
  subrectcount(id) {
    var number = id
    if (number > 1) {
      var add = number - this.count
      this.setvalue = add
    } else {
    }
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
    // navText: ['<i class="fa fa-chevron-left c-black"></i>', '<i class="fa fa-chevron-right c-black"></i>'],
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
    // nav: true
  }
}
