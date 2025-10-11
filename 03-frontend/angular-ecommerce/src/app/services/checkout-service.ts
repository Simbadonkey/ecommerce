import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Purchase } from '../common/purchase';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PaymentInfo } from '../common/payment-info';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private purchaseUrl = environment.abcdApiUrl + '/checkout/purchase';

  private paymentIntentUrl = environment.abcdApiUrl + '/checkout/payment-intent';

  constructor(private httpClinet: HttpClient){

  }


  placeOrder(purchase: Purchase): Observable<any> {
    return this.httpClinet.post<Purchase>(this.purchaseUrl, purchase);
  }


  //make REST API call
  createPaymentIntent(paymentInfo: PaymentInfo): Observable<any>{
    return this.httpClinet.post<PaymentInfo>(this.paymentIntentUrl, paymentInfo);
  }
  
}
