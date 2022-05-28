import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusPageComponent } from './components/aboutus-page/aboutus-page.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ShopPageComponent } from './components/shop-page/shop-page.component';
import { CardPageComponent } from './components/card-page/card-page.component';
import { AddCardPageComponent } from './components/add-card-page/add-card-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { MyaccountPageComponent } from './components/myaccount-page/myaccount-page.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { ShoppingDashboardComponent } from './components/shopping-dashboard/shopping-dashboard.component';
import { AboutDashboardComponent } from './components/about-dashboard/about-dashboard.component';
import { OurAssociationUtgoPageComponent } from './components/our-association-utgo-page/our-association-utgo-page.component';
import { OurAssociationRbyPageComponent } from './components/our-association-rby-page/our-association-rby-page.component';
import { BlogDashboardComponent } from './components/blog/blog-dashboard/blog-dashboard.component';
import { BlogListPageComponent } from './components/blog/blog-list-page/blog-list-page.component';
import { BlogDetailPageComponent } from './components/blog/blog-detail-page/blog-detail-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'shell' },
  {
    path: 'shell', component: DashboardComponent, data: { title: 'Sea-Shell' },
    children: [
      { path: '', redirectTo: 'home-page', pathMatch: 'full' },
      { path: 'home-page', component: HomePageComponent, data: { animation: 'Home', title: 'Home' } },
      {
        path: 'shop-dashboard', component: ShoppingDashboardComponent, data: { animation: 'Shop', title: 'Shop' },
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'shop-page' },
          { path: 'shop-page', component: ShopPageComponent, data: { title: 'Product' } },
          { path: 'cart-page', component: CardPageComponent, data: { animation: 'Cart', title: 'Cart' } },
          { path: 'checkout-page', component: CheckoutPageComponent, data: { animation: 'Checkout', title: 'Checkout' } },
          { path: 'add-cart-page', component: AddCardPageComponent, data: { animation: 'Addcart', title: 'Add-to-cart' } },
        ]
      },
      {
        path: 'about-dashboard', component: AboutDashboardComponent, data: { animation: 'About', title: 'About' },
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'about-page' },
          { path: 'about-page', component: AboutusPageComponent, data: { animation: 'About', title: 'About-us' } },
          { path: 'myaccount-page', component: MyaccountPageComponent, data: { animation: 'Myaccount', title: 'My-Account' } },
          { path: 'guidance-page', component: OurAssociationUtgoPageComponent, data: { animation: 'Guidance', title: 'Guidance' } },
          { path: 'recognised-page', component: OurAssociationRbyPageComponent, data: { animation: 'Recognised', title: 'Recognised' } },
        ]
      },
      { path: 'contact-page', component: ContactPageComponent, data: { animation: 'Contact', title: 'Contact-us' } },
      {
        path: 'blog-dashboard', component: BlogDashboardComponent, data: { animation: 'Blog', title: 'Blog' },
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'blog-list' },
          { path: 'blog-list', component: BlogListPageComponent, data: {animation: 'Blog', title: 'List' } },
          { path: 'blog-detail', component: BlogDetailPageComponent, data: {animation: 'Contact', title: 'Details' } },
        ]
      },
      { path: 'search-page', component: SearchPageComponent, data: { animation: 'Search', title: 'Search' } },
    ]
  },
];

@NgModule({
  imports: [CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
