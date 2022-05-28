import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatatransferService } from 'src/app/services/datatransfer.service';
import { NotificationService } from 'src/app/services/notification.service';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  RegisterForm: FormGroup
  LoginForm: FormGroup
  constructor(private fb: FormBuilder, private notifyService: NotificationService,
     private router: Router, private getdata: DatatransferService) {
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
  regValue = false
  logValue = false
  get regForm() { return this.RegisterForm.controls; }
  get logForm() { return this.LoginForm.controls; }
  ngOnInit() {
    $('#display-top').addClass('toptotop')
    $(document).ready(function () {
      $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
          $('#display-top').removeClass('toptotop')
        } else {
          $('#display-top').addClass('toptotop')
        }
      });
    });
    $("#slideshow > div:gt(0)").hide();

    setInterval(function () {
      $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    }, 3000);
    this.jqueryfun()

  }
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
      $("#_account").modal('hide')
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
      $("#_account").modal('hide')
    }
  }
  searcPage(value) {
    if (value.length != 0) {
      this.getdata.searchValue(value)
      $("#_search").modal('hide')
    } else {
      $("#_search").modal('hide')
    }

  }
  jqueryfun() {
    $(window).scroll(function () {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");

      } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
    });
    $('nav .navbar-collapse ul li').click(function () {
      $(".navbar-collapse").collapse('hide');
    });
    $('#newaccount').click(function () {
      $("#sign_up").show('slow')
      $("#sign_in").hide('slow')
      $('.reg').addClass('activecolor')
      $('.log').removeClass('activecolor')
    })
    $('#login').click(function () {
      $("#sign_up").hide('slow')
      $("#sign_in").show('slow')
      $('.log').addClass('activecolor')
      $('.reg').removeClass('activecolor')
    })
    $("#sign_up").show('slow')
    $('.reg').addClass('activecolor')
    $('.log').removeClass('activecolor')
  }
  shopPage(name) {    
    this.getdata.shopItem(name)
  }
  modalNav(){
    $("#exampleModal").modal('show')
  }
}
