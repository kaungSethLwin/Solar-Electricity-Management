package com.example.SEB.enums;

import java.util.Optional;

import com.example.SEB.entities.User;

public enum UserRole {
    ADMIN,EMPLOYEE,CUSTOMER;

    Optional<User> stream() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'stream'");
    }
}
