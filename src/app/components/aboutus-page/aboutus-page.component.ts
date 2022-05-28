import { Component, OnInit } from '@angular/core';
declare var $: any
@Component({
  selector: 'app-aboutus-page',
  templateUrl: './aboutus-page.component.html',
  styleUrls: ['./aboutus-page.component.css']
})
export class AboutusPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  yearClick() {
    $('#right_modal_xs').modal('show')
  }
}
