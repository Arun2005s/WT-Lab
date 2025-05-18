import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CartComponent } from './pages/cart/cart.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { CakesComponent } from './pages/cakes/cakes.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';
import { CartService } from './services/cart.service';
import { SubscriptionComponent } from './pages/subscription/subscription.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ShopComponent,
    CartComponent,
    FeedbackComponent,
    CookiesComponent,
    CakesComponent,
    CheckoutComponent,
    ThankyouComponent,
    SubscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CartService], // Provide CartService here
  bootstrap: [AppComponent]
})
export class AppModule { }
