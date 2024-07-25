package com.example.SEB.dto;

import com.example.SEB.enums.UserRole;

import lombok.Data;

@Data
public class AuthenticationResponse {
    
    private String jwt;
    private  int userId;
    private UserRole role;
    private String username;

}
