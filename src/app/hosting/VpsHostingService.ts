import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VpsHostingService {
  private apiUrl = 'https://example.com/api/vps-plans'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getVpsPlans(): Observable<VpsPlan[]> {
    return this.http.get<VpsPlan[]>(this.apiUrl);
  }

  buyVpsPlan(plan: VpsPlan): Observable<any> {
    // Implement your logic for purchasing the VPS plan here
    // You can make an HTTP POST request to your API or send the data using a different method
    // Return an observable that resolves when the purchase is successful
    return new Observable(observer => {
      // Simulate a 2 second delay before resolving the observable
      setTimeout(() => {
        observer.next(`You have purchased the ${plan.name} plan for ₹${plan.price}`);
        observer.complete();
      }, 2000);
    });
  }
}

interface VpsPlan {
  id: number;
  name: string;
  price: number;
}
