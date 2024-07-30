package com.example.SEB.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.SEB.entities.User;
import com.example.SEB.enums.UserRole;

@Repository
public interface UserRepository extends JpaRepository<User,Integer>{
    
    Optional<User> findFirstByEmail(String email);

    Optional<User> findByRole(UserRole role);

    Optional<User> findByUsername(String username);

    @Query(" FROM User where role = 'CUSTOMER'")
    List<User> getAllCustomersNames();
}
