import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CartComponent } from './pages/cart/cart.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { CakesComponent } from './pages/cakes/cakes.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';
import { CartService } from './services/cart.service'; // Import CartService

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ShopComponent,
    CartComponent,
    FeedbackComponent,
    LoginComponent,
    SignupComponent,
    CookiesComponent,
    CakesComponent,
    CheckoutComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CartService], // Provide CartService here
  bootstrap: [AppComponent]
})
export class AppModule { }
