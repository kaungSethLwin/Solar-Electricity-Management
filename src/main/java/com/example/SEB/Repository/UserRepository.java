package com.example.SEB.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.example.SEB.entities.User;
import com.example.SEB.enums.UserRole;

@Repository
public interface UserRepository extends JpaRepository<User,Integer>{
    
    Optional<User> findFirstByEmail(String email);

    Optional<User> findByRole(UserRole admin);

    Optional<User> findByUsername(String username);
}
