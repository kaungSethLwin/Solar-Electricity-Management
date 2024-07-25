package com.example.SEB.dto;

import lombok.Data;

@Data
public class AuthenticationRequest {
 
    private String email;
    private String password;
}
