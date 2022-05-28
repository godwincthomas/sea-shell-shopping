import { Component, OnInit } from '@angular/core';
import { DatatransferService } from 'src/app/services/datatransfer.service';
declare var $: any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private getdata: DatatransferService) { }

  ngOnInit() {
    $(window).scroll(function () {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");

      } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
    });
  }
  fun() {
    // JS is to make the text editable for demo purpose, not required for the effect. Thanks for the suggestion @chriscoyier! 
    var h1 = document.querySelector("h1");
    h1.addEventListener("input", function () {
      this.setAttribute("data-heading", this.innerText);
    });
  }
  shopPage(name) {    
    this.getdata.shopItem(name)
  }

}
