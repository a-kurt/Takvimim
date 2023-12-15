package com.takvimim.security.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/*
    To find Users in the Database, we create search methods in this repository interface.
 */
public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
    Optional<User> findByPhoneNumber(String phoneNumber);
}
