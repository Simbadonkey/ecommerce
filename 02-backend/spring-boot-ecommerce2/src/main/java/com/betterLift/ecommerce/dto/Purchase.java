package com.betterLift.ecommerce.dto;


import com.betterLift.ecommerce.entity.Address;
import com.betterLift.ecommerce.entity.Customer;
import com.betterLift.ecommerce.entity.Order;
import com.betterLift.ecommerce.entity.OrderItem;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
public class Purchase {

    private Customer customer;

    private Address shippingAddress;

    private Address billingAddress;

    private Order order;

    private Set<OrderItem> orderItems;
}
