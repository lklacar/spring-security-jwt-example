package com.lukaklacar.example.repository;

import com.lukaklacar.example.domain.Authority;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * Spring Data JPA repository for the Authority entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {

    Authority findAuthorityByName(String name);
}
