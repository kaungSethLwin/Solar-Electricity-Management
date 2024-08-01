package com.example.SEB.service;

import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetailsService;

import com.example.SEB.dto.UserDto;
import com.example.SEB.entities.User;

public interface UserService {
    
    UserDetailsService userDetailsService();


    // update a user
    UserDto updateUser(UserDto user);

    // Retrieve a user by ID
    Optional<UserDto> getUserById(int userId);

    // Retrieve all users
    List<UserDto> getAllUsers();

    // Delete a user by ID
    void deleteUser(int userId);

    // Find a user by username
    Optional<User> findByUsername(String username);

    UserDto convertToDto(User user) ;

    User convertToEntity(UserDto userDto); 

    List<UserDto> getAllCustomers();

    Optional<UserDto> findByEmail(String email);

} 