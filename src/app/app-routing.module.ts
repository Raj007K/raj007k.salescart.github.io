import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { ContainerComponent } from './container/container.component';
import { DomainComponent } from "./domain/domain.component";
import { HomeComponent } from "./home/home.component";
import { HostingComponent } from './hosting/hosting.component';
import { HostingcontentComponent } from './hostingcontent/hostingcontent.component';

import { PaymentComponent } from "./payment/payment.component";
import { PurchaseComponent } from "./purchase/purchase.component";


const routes:Routes =[
 
  {path:'',component:ContainerComponent},
  {path:'ShoppingCart',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'domain',component:DomainComponent},
  {path:'hostingcontent',component:HostingcontentComponent},
  {path:'hosting',component:HostingComponent}
  // {path:'payment',component:PaymentComponent},
  // {path:'purchase',component:PurchaseComponent}
  ]



@NgModule({
  declarations: [],
  imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }
