package com.example.SEB.controller;

import com.example.SEB.dto.BillDto;
import com.example.SEB.dto.HouseDto;
import com.example.SEB.dto.UserDto;
import com.example.SEB.service.BillService;
import com.example.SEB.service.HouseService;
import com.example.SEB.service.UserService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


    @RestController
    @RequestMapping("/api/customer")
    @RequiredArgsConstructor
    @CrossOrigin(origins = "*") 
    public class CustomerController {

        private final BillService billService;
        private final UserService userService;
        private final HouseService houseService;


        @GetMapping("/bills")
       public ResponseEntity<List<BillDto>> getBills() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();

        System.out.println("username: " + email);
        System.out.println("Received request for /bills");
        
        // Fetch the UserDto based on the email
        UserDto userDto = userService.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));
        
        // Fetch the houses associated with the user using HouseService
        List<HouseDto> houses = houseService.findHousesByUser(userDto);
        
        if (houses.isEmpty()) {
            // Return NO_CONTENT if no houses are associated with the user
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        
        // Get all bills by house DTOs
        List<BillDto> bills = billService.getAllBillsByHouses(houses);
        
        return new ResponseEntity<>(bills, HttpStatus.OK);
    }

    }

