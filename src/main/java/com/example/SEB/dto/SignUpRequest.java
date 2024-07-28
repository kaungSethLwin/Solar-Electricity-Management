package com.example.SEB.dto;

import java.util.Date;

import com.example.SEB.enums.UserRole;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Data;

@Data
public class SignUpRequest {
    
    private String username;
    private String email;
    private String password;
    private String phoneNumber;
    private Date createDate;
    @Enumerated(EnumType.STRING)
    private UserRole role;
}