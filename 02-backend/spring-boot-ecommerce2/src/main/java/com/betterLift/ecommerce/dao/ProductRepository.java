package com.betterLift.ecommerce.dao;

import com.betterLift.ecommerce.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ProductRepository extends JpaRepository<Product, Long> {
    Page<Product> findByCategoryId(@Param("id") Long id, Pageable pageable);

    // select * from Product p where p.name like concat('%', :name, '%')
    Page<Product> findByNameContaining(@Param("name") String name, Pageable page);
}
