package com.example.SEB.service.auth;

import com.example.SEB.dto.SignUpRequest;
import com.example.SEB.dto.UserDto;

public interface AuthSerrvice {
    UserDto signupUser(SignUpRequest signUpRequest);

    boolean hasUserEmail(String email);
}
