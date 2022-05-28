import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatatransferService } from 'src/app/services/datatransfer.service';
declare var $: any;
@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css']
})
export class CardPageComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router, private getdata: DatatransferService) { }

  ngOnInit() {
    $("#tax-data").collapse('show');
    this.country()
  }
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
  CountryList: any = []
  country() {
    this.httpClient.get('/assets/json/countryState.json').subscribe(data => {
      this.CountryList = data;
    })
  }
  countryarray: any = []
  cnt = 1
  statename: any = []
  selectcountry(event) {
    var country_name = event.target.selectedIndex
    var number = country_name - this.cnt
    this.httpClient.get('/assets/json/countryState.json').subscribe(data => {
      this.countryarray = data[number]
      this.statename = this.countryarray.states
    })
  }
}
