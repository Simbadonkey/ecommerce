package com.betterLift.ecommerce.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="address")
@Getter
@Setter
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String street;

    private String city;

    private String state;

    private String country;

    @Column(name="zip_code")
    private String zipCode;

    @OneToOne
    @PrimaryKeyJoinColumn
    private Order order;
}
