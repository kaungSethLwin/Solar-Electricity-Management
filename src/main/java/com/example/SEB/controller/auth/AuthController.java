package com.example.SEB.controller.auth;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.SEB.Repository.UserRepository;
import com.example.SEB.Utils.JwtUtils;
import com.example.SEB.dto.AuthenticationRequest;
import com.example.SEB.dto.AuthenticationResponse;
import com.example.SEB.entities.User;
import com.example.SEB.service.UserService;
import com.example.SEB.service.auth.AuthSerrvice;


@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*") 
public class AuthController {

    @Autowired
    AuthSerrvice authService;

    @Autowired 
    UserRepository userRepository;

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    UserService userService;

    @Autowired
    AuthenticationManager authenticationManager;

    

    


    @PostMapping("/login")
    public AuthenticationResponse login(@RequestBody AuthenticationRequest authenticationRequest){
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(), authenticationRequest.getPassword()));
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException("Incorrect username or passowrd");
        }

        UserDetails userDetails = userService.userDetailsService().loadUserByUsername(authenticationRequest.getEmail());
        Optional<User> optionalUser = userRepository.findFirstByEmail(authenticationRequest.getEmail());
        final String jwtToken = jwtUtils.generateToken(userDetails);
        System.out.println("User Name: " + userDetails.getUsername());
        System.out.println("User Email: " + optionalUser.get().getEmail());
        AuthenticationResponse authResponse = new AuthenticationResponse();
       if(optionalUser.isPresent()){
        authResponse.setUsername(optionalUser.get().getUsername());
        authResponse.setJwt(jwtToken);
        authResponse.setUserId(optionalUser.get().getUserId());
        authResponse.setRole(optionalUser.get().getRole());
       }
        return authResponse;
    }
}
