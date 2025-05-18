import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CartComponent } from './pages/cart/cart.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { CakesComponent } from './pages/cakes/cakes.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'cart', component: CartComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: 'cakes', component: CakesComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'thankyou', component: ThankyouComponent },
  {path: 'subscription', component: SubscriptionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
