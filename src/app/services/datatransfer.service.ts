import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class DatatransferService {
  appconstant = 'http://35.154.37.0:8080/AMMatrimony/';
  constructor(private Router: Router, private http: HttpClient,) { }

  // notifyError(msg) {
  //   $("#notifErrorMsg").html(msg)
  //   $("#notifErrorMsg").fadeIn('fast');
  //   $('#notifErrorMsg').delay(2000).fadeOut('slow');
  // }
  notifysuccess(msg) {
    $("#noteSuccessMsg").html(msg)
    $("#noteSuccessMsg").fadeIn('fast');
    $('#noteSuccessMsg').delay(2000).fadeOut('slow');
  }
  notifyalart(msg) {
    $("#noteAlartMsg").html(msg)
    $("#noteAlartMsg").fadeIn('fast');
    $('#noteAlartMsg').delay(2000).fadeOut('slow');
  }
  notifyError(msg) {
    $("#noteErrorMsg").html(msg)
    $("#noteErrorMsg").fadeIn('fast');
    $('#noteErrorMsg').delay(2000).fadeOut('slow');
  }
  Countryjsondata() {
    return this.http.get("./src/assets/json/countryState.json");
  }
  Search_Value: any
  searchValue(value) {
    this.Search_Value = value;
    this.Router.navigate(['shell/search-page'], { queryParams: { value: this.Search_Value } })
  }
  profile_info_id: any
  // Hotel_info_id:any
  viewdatafulldetail(profile_id) {
    this.profile_info_id = profile_id;
    // this.Router.navigate(['dashboard/hotels-details'], { queryParams: { profile_id: this.profile_info_id } })
    // this.Hotel_info_id = hotel_id;
    // this.Router.navigate(['dashboard/hotels-details'], { queryParams: { hotel_id: this.Hotel_info_id } })

  }
  product_name: any
  shopItem(name) {
    this.product_name = name;
    this.Router.navigate(['shell/shop-dashboard'], { queryParams: { name: this.product_name } })
  }
  proId: any
  cateName: any
  buyNow(id, name) {
    this.proId = id;
    this.cateName = name;    
    this.Router.navigate(['/shell/shop-dashboard/add-cart-page'], {
      queryParams: {
        _id: this.proId,
        cateName: this.cateName
      }
    })
  }
}
