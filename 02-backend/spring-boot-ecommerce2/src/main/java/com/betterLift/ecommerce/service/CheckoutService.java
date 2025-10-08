package com.betterLift.ecommerce.service;

import com.betterLift.ecommerce.dto.Purchase;
import com.betterLift.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}
