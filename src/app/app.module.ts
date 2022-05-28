import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// install modules
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CarouselModule } from 'ngx-owl-carousel-o';

// service modules
import { WebserviceService } from './services/webservice.service';
import { DatatransferService } from './services/datatransfer.service';
// Component modules
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductsComponent } from './pages/products/products.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ShopPageComponent } from './components/shop-page/shop-page.component';
import { AboutusPageComponent } from './components/aboutus-page/aboutus-page.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { CardPageComponent } from './components/card-page/card-page.component';
import { AddCardPageComponent } from './components/add-card-page/add-card-page.component';
import { CardSliderComponent } from './pages/card-slider/card-slider.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { NewArrivalComponent } from './pages/new-arrival/new-arrival.component';
import { MyaccountPageComponent } from './components/myaccount-page/myaccount-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { ShoppingDashboardComponent } from './components/shopping-dashboard/shopping-dashboard.component';
import { AboutDashboardComponent } from './components/about-dashboard/about-dashboard.component';
import { OurAssociationUtgoPageComponent } from './components/our-association-utgo-page/our-association-utgo-page.component';
import { OurAssociationRbyPageComponent } from './components/our-association-rby-page/our-association-rby-page.component';
import { BlogDashboardComponent } from './components/blog/blog-dashboard/blog-dashboard.component';
import { BlogDetailPageComponent } from './components/blog/blog-detail-page/blog-detail-page.component';
import { BlogListPageComponent } from './components/blog/blog-list-page/blog-list-page.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomePageComponent,
    ProductsComponent,
    FooterComponent,
    NavbarComponent,
    ShopPageComponent,
    AboutusPageComponent,
    CheckoutPageComponent,
    CardPageComponent,
    AddCardPageComponent,
    CardSliderComponent,
    ContactPageComponent,
    NewArrivalComponent,
    MyaccountPageComponent,
    SearchPageComponent,
    ShoppingDashboardComponent,
    AboutDashboardComponent,
    OurAssociationUtgoPageComponent,
    OurAssociationRbyPageComponent,
    BlogDashboardComponent,
    BlogDetailPageComponent,
    BlogListPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  providers: [WebserviceService, DatatransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
