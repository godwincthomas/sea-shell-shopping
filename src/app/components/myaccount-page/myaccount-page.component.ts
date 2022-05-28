import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';
declare var $: any;
@Component({
  selector: 'app-myaccount-page',
  templateUrl: './myaccount-page.component.html',
  styleUrls: ['./myaccount-page.component.css']
})
export class MyaccountPageComponent implements OnInit {
  RegisterForm: FormGroup
  LoginForm: FormGroup
  constructor(private fb: FormBuilder, private notifyService: NotificationService, private httpClient: HttpClient,) {
    this.RegisterForm = this.fb.group({
      username: [null, Validators.required],
      phonenumber: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      conformpassword: [null, Validators.required],
    })
    this.LoginForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    })
  }
  account_show
  signup_show
  signin_show
  order_show
  ngOnInit() {
    this.accountbtn()
    this.country()
  }
  regValue = false
  logValue = false
  get regForm() { return this.RegisterForm.controls; }
  get logForm() { return this.LoginForm.controls; }
  registerForm() {
    this.regValue = true
    var getform = this.RegisterForm.value
    if (this.RegisterForm.invalid) {
      this.notifyService.showError("Form is invalided !!", "")
      return;
    } else {
      this.notifyService.showSuccess("Register Form successfully !!", "")
      console.log(getform)
      this.RegisterForm.reset()
    }
  }
  loginForm() {
    this.logValue = true
    var getform = this.LoginForm.value
    if (this.LoginForm.invalid) {
      this.notifyService.showError("Form is invalided !!", "")
      return;
    } else {
      this.notifyService.showSuccess("Login successfully !!", "")
      console.log(getform)
      this.LoginForm.reset()
    }
  }
  // state & country json

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


  // tab open & close fun
  accountbtn() {
    this.account_show = '1'
    this.signup_show = ''
    this.signin_show = ''
    this.order_show = ''
    $('.act').addClass('tog-active')
    $('.reg').removeClass('tog-active')
    $('.log').removeClass('tog-active')
    $('.ord').removeClass('tog-active')
  }
  regbtn() {
    this.account_show = ''
    this.signup_show = '1'
    this.signin_show = ''
    this.order_show = ''
    $('.act').removeClass('tog-active')
    $('.reg').addClass('tog-active')
    $('.log').removeClass('tog-active')
    $('.ord').removeClass('tog-active')
  }
  logbtn() {
    this.account_show = ''
    this.signup_show = ''
    this.signin_show = '1'
    this.order_show = ''
    $('.act').removeClass('tog-active')
    $('.reg').removeClass('tog-active')
    $('.log').addClass('tog-active')
    $('.ord').removeClass('tog-active')
  }
  orderbtn() {
    this.account_show = ''
    this.signup_show = ''
    this.signin_show = ''
    this.order_show = '1'
    $('.act').removeClass('tog-active')
    $('.reg').removeClass('tog-active')
    $('.log').removeClass('tog-active')
    $('.ord').addClass('tog-active')
  }
}
