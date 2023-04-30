// import { Component, OnInit } from '@angular/core';
// import { VpsHostingService } from './vps-hosting.service';

// @Component({
//   selector: 'app-buy-vps-hosting',
//   templateUrl: './buy-vps-hosting.component.html',
//   styleUrls: ['./


import { Component,OnInit } from '@angular/core'; 
import {VpsHostingService } from './VpsHostingService'


@Component({
  selector: 'app-hosting',
  templateUrl: './hosting.component.html',
  styleUrls: ['./hosting.component.css']
})



export class HostingComponent implements OnInit {
  constructor() { 

  }
  ngOnInit(): void {
    /* init logic */
  }
  mockPlans: any[] = [
    { id: 1, name: 'Basic(1GB RAM,25GB SSD NVMe,1TB Bandwidth,1Dedicated IP)',   price:  500 },
    { id: 2, name: 'Premium(2GB RAM,25GB SSD NVMe,1TB Bandwidth,1Dedicated IP)', price: 1000 },
    { id: 3, name: 'Standard(2GB RAM,50GB SSD NVMe,1TB Bandwidth,1Dedicated IP)', price: 2000 },
    { id: 4, name: 'Enhanced(4GB RAM,60GB SSD NVMe,1TB Bandwidth,1Dedicated IP)', price: 3000 },
    { id: 5, name: 'Ultimate(8GB RAM,120GB SSD NVMe,1TB Bandwidth,1Dedicated IP)', price: 4000 },
  ];

  buyPlan()
  { 
    var message= "Thanks for purchasing the plan,Our Staffs will connect you for further actions to host the VPS.";
    window.alert(message);
  }
   
}  


