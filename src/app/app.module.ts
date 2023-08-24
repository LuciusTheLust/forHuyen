import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {  HttpClientModule } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrandComponent } from './brand/brand.component';
import { OrderComponent } from './order/order.component';
import { NavbarComponent } from './navbar/navbar.comopnet';
import { FooterComponent } from './footer/footer.component';
import { OrderItemComponent } from './orderitem.component.html/orderitem.component';




@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    HomepageComponent,
    BrandComponent,
    OrderComponent,
    NavbarComponent,
    FooterComponent,
    OrderItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
