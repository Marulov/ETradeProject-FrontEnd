import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'; //backende bağlanmak için gerekli.
import {FormsModule} from "@angular/forms"; //[(ngModel)] ı kullanabilmek için gerekli.
import {BrowserAnimationsModule} from "@angular/platform-browser/animations" // ngx-toastr ile animasyonu güzel kullanmak için eklendi.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { from } from 'rxjs';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import {ToastrModule} from "ngx-toastr"; // ngx-toastr ı kullanabilmek için eklendi.
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
