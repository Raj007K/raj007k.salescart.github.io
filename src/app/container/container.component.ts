import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from '../contact/contact.component';
import { AppRoutingModule } from '../app-routing.module';

const routes:Routes =[

  {path:'contact',component:ContactComponent}

  ]

  @Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css'],
   
  })
  

  
export class ContainerComponent {
  title = 'Shopping-Cart';
}
