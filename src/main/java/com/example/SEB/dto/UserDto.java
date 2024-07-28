package com.example.SEB.dto;

import java.util.Date;
import java.util.List;

import com.example.SEB.enums.UserRole;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Data;

@Data
public class UserDto {

    private int userId;
    private String username;
    private String email;
    private String password;
    private String phoneNumber;
    private boolean isActive;
    private Date createDate;
    @Enumerated(EnumType.STRING)
    private UserRole role;
    private List<HouseDto> houses;
}
