package com.lukaklacar.example;

import com.lukaklacar.example.domain.Authority;
import com.lukaklacar.example.repository.AuthorityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Seed implements CommandLineRunner {
    private AuthorityRepository authorityRepository;

    @Autowired
    public Seed(AuthorityRepository authorityRepository) {
        this.authorityRepository = authorityRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        Authority authority = new Authority();
        authority.setName("ROLE_USER");
        authorityRepository.save(authority);
    }
}
