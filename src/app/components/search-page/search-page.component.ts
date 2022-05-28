import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DatatransferService } from 'src/app/services/datatransfer.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private getdata: DatatransferService) { }
  ProductList: any = []
  seashellList: any = []
  SearchValue: any
  ngOnInit() {
    this.httpClient.get('/assets/json/products.json').subscribe(data => {
      this.ProductList = data;
      this.seashellList = this.ProductList[0].seashell
    })
    this.SearchValue = this.getdata.Search_Value
    this.route.queryParams.pipe(filter(params => params.value))
      .subscribe(params => {
        this.SearchValue = params.value;
        // this.viewtour_det(this.tourism_info_id)
      });
  }
  searcPage(value) {
    if (value.length != 0) {
      this.SearchValue = value
    } else {

    }
  }
}
