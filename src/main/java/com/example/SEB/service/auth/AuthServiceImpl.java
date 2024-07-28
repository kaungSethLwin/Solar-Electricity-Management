package com.example.SEB.service.auth;

import java.util.Date;
import java.util.Optional;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.SEB.Repository.UserRepository;
import com.example.SEB.dto.SignUpRequest;
import com.example.SEB.dto.UserDto;
import com.example.SEB.entities.User;
import com.example.SEB.enums.UserRole;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthSerrvice{

    private final UserRepository userRepository;


    @PostConstruct
    public void createAdminAccount(){
        Optional<User> optionalUser = userRepository.findByRole(UserRole.ADMIN);

        if(optionalUser.isEmpty()){
            User user = new User();
            user.setEmail("adminuser@gmail.com");
            user.setUsername("admin");
            user.setPassword(new BCryptPasswordEncoder().encode("admin123"));
            user.setRole(UserRole.ADMIN);
            user.setCreateDate(new Date());
            user.setPhoneNumber("090909090909");
            user.setActive(true);
            
            userRepository.save(user);

            System.out.println("admin account created");

        }else{
            System.out.println("admin already exist!");
        }
    }


    @Override
    public UserDto signupUser(SignUpRequest signUpRequest) {
       User user = new User();
       user.setUsername(signUpRequest.getUsername());
       user.setEmail(signUpRequest.getEmail());
       user.setPassword(new BCryptPasswordEncoder().encode(signUpRequest.getPassword()));
       user.setRole(signUpRequest.getRole()); 
       user.setCreateDate(new Date()); 
       user.setActive(true);
       user.setPhoneNumber(signUpRequest.getPhoneNumber());
       User createdUser = userRepository.save(user);
       return createdUser.getUserDto();

    }


    @Override
    public boolean hasUserEmail(String email) {
        return userRepository.findFirstByEmail(email).isPresent();
    }
    
}
