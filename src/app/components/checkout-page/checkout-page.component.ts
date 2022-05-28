import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { ICustomWindow, WindowRefService } from 'src/app/services/window-ref.service';
import { Router } from '@angular/router';
import { DatatransferService } from 'src/app/services/datatransfer.service';
declare var $: any;

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
  private _window: ICustomWindow;
  public rzp: any;

  public options: any = {
    key: '', // add razorpay key here
    name: 'The Swag Coder',
    description: 'Shopping',
    amount: 100, // razorpay takes amount in paisa
    prefill: {
      name: 'The Swag Coder',
      email: '', // add your email id
    },
    notes: {},
    theme: {
      color: '#3880FF'
    },
    handler: this.paymentHandler.bind(this),
    modal: {
      ondismiss: (() => {
        this.zone.run(() => {
          // add current page routing if payment fails
        })
      })
    }
  };

  constructor(private zone: NgZone, private winRef: WindowRefService, private httpClient: HttpClient, private router: Router, private getdata: DatatransferService
  ) {
    this._window = this.winRef.nativeWindow;
  }

  initPay(): void {
    this.rzp = new this.winRef.nativeWindow['Razorpay'](this.options);
    this.rzp.open();
  }

  paymentHandler(res: any) {
    this.zone.run(() => {
      // add API call here
    });
  }
  differentant: any
  account: any
  ngOnInit() {
    this.country()
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
  togglebtn(event) {
    var data = event.target.checked
    if (data == true) {
      this.differentant = 'show'
    } else if (data == false) {
      this.differentant = ''
    }
  }
  checkboxbtn(event) {
    var data = event.target.checked
    if (data == true) {
      this.account = 'show'
    } else if (data == false) {
      this.account = ''
    }
  }
}
