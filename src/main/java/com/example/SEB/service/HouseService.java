package com.example.SEB.service;

import java.util.List;
import java.util.Optional;

import com.example.SEB.dto.HouseDto;
import com.example.SEB.dto.UserDto;
import com.example.SEB.entities.House;

public interface HouseService {
    
  // Create or update a house
  HouseDto saveHouse(HouseDto houseDto);

  // Retrieve a house by its ID
  Optional<HouseDto> getHouseById(int houseId);

  // Retrieve all houses
  List<HouseDto> getAllHouses();

  // Delete a house by its ID
  void deleteHouse(int houseId);

  // Find all houses by city
  List<HouseDto> findHousesByCity(String city);

  // Find all houses by state
  List<HouseDto> findHousesByState(String state);

  // Find all houses associated with a specific user ID
  List<HouseDto> findHousesByUserId(Integer userId);

  // Convert House entity to HouseDto
  HouseDto convertToDto(House house);

  // Convert HouseDto to House entity
  House convertToEntity(HouseDto houseDto);

  List<HouseDto> findByOwnerName(String ownerName);


  HouseDto updateHouse(HouseDto houseDto);
  
  boolean hasMeterNumber(String number);
  
  List<String> getAllHouseNames();

   List<HouseDto> findHousesByUser(UserDto userDto);
}
