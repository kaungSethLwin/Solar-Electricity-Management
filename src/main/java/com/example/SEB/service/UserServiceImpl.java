package com.example.SEB.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.SEB.Repository.UserRepository;
import com.example.SEB.dto.UserDto;
import com.example.SEB.entities.User;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final HouseService houseService;

    @Override
    public UserDetailsService userDetailsService() {
        return new UserDetailsService() {
            @Override
            public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException{
                User user = userRepository.findFirstByEmail(email)
                    .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));
            return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), new ArrayList<>());
            }
        };
    }

    @Override
    public UserDto updateUser(UserDto userDto) {
        User user = convertToEntity(userDto);
        User updatedUser = userRepository.save(user);
        return convertToDto(updatedUser);

    }

    @Override
    public Optional<UserDto> getUserById(int userId) {
        return userRepository.findById(userId).map(this::convertToDto);
    }

    @Override
    public List<UserDto> getAllUsers() {
        return userRepository.findAll().stream().map(this::convertToDto).collect(Collectors.toList());
    }

    @Override
    public void deleteUser(int userId) {
        userRepository.deleteById(userId);
    }

    @Override
    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public UserDto convertToDto(User user) {
        UserDto userDto = new UserDto();
        userDto.setUserId(user.getUserId());
        userDto.setUsername(user.getUsername());
        userDto.setEmail(user.getEmail());
        userDto.setPassword(user.getPassword());
        userDto.setPhoneNumber(user.getPhoneNumber());
        userDto.setActive(user.isActive());
        userDto.setCreateDate(user.getCreateDate());
        userDto.setRole(user.getRole());
        userDto.setHouses(user.getHouses().stream().map(houseService::convertToDto).collect(Collectors.toList()));
        return userDto;
    }

    @Override
    public User convertToEntity(UserDto userDto) {
        User user = new User();
        user.setUserId(userDto.getUserId());
        user.setUsername(userDto.getUsername());
        user.setEmail(userDto.getEmail());
        user.setPassword(new BCryptPasswordEncoder().encode(userDto.getPassword()));
        user.setPhoneNumber(userDto.getPhoneNumber());
        user.setActive(userDto.isActive());
        user.setCreateDate(userDto.getCreateDate());
        user.setRole(userDto.getRole());
        user.setHouses(userDto.getHouses().stream().map(houseService::convertToEntity).collect(Collectors.toList()));
        return user;
    }

    @Override
    public List<UserDto> getAllCustomers() {
        List<User> customers = userRepository.getAllCustomersNames();
        return customers.stream()
                        .map(this::convertToDto)
                        .collect(Collectors.toList());
    }

    @Override
    public Optional<UserDto> findByEmail(String email) {
        User user = userRepository.findFirstByEmail(email)
        .orElseThrow(() -> new UsernameNotFoundException("Email not found: " + email));

        // Convert User entity to UserDto  
        UserDto userDto = convertToDto(user);

       return Optional.of(userDto);
    }
    
}
