package com.betterLift.ecommerce.service;

import com.betterLift.ecommerce.dto.PaymentInfo;
import com.betterLift.ecommerce.dto.Purchase;
import com.betterLift.ecommerce.dto.PurchaseResponse;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);

    PaymentIntent createPaymentIntent(PaymentInfo paymentInfo) throws StripeException;
}
