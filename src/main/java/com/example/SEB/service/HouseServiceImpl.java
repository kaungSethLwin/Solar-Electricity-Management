package com.example.SEB.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SEB.Repository.HouseRepository;
import com.example.SEB.Repository.UserRepository;
import com.example.SEB.dto.HouseDto;
import com.example.SEB.dto.UserDto;
import com.example.SEB.entities.Bill;
import com.example.SEB.entities.House;
import com.example.SEB.entities.User;

import jakarta.transaction.Transactional;


@Service
public class HouseServiceImpl implements HouseService{
    
    @Autowired
    HouseRepository houseRepository;

    @Autowired
    UserRepository userRepository;

    @Override
    public HouseDto saveHouse(HouseDto houseDto) {
        House house = convertToEntity(houseDto);
        House savedHouse = houseRepository.save(house);
        return convertToDto(savedHouse);
    }

    @Override
    public Optional<HouseDto> getHouseById(int houseId) {
        return houseRepository.findById(houseId).map(this::convertToDto);
    }

    @Override
    public List<HouseDto> getAllHouses() {
        return houseRepository.findAll().stream().map(this::convertToDto).collect(Collectors.toList());
    }

    @Override
    public void deleteHouse(int houseId) {
        if (houseRepository.existsById(houseId)) {
            houseRepository.deleteById(houseId);
        } else {
            throw new RuntimeException("House with ID " + houseId + " does not exist.");
        }
    }


    @Override
    public List<HouseDto> findHousesByCity(String city) {
        return houseRepository.findByCity(city).stream().map(this::convertToDto).collect(Collectors.toList());
    }

    @Override
    public List<HouseDto> findHousesByState(String state) {
        return houseRepository.findByState(state).stream().map(this::convertToDto).collect(Collectors.toList());
    }

    @Override
    public List<HouseDto> findHousesByUserId(Integer userId) {
        return houseRepository.findByUser_UserId(userId).stream().map(this::convertToDto).collect(Collectors.toList());
    }

    @Override
    public List<HouseDto> findByOwnerName(String ownerName) {
        List<House> houses = houseRepository.findByOwnerName(ownerName);
        return houses.stream()
                     .map(this::convertToDto)
                     .collect(Collectors.toList());
    }

    @Transactional
    @Override
    public HouseDto updateHouse(HouseDto houseDto) {
    // Load the existing house entity from the database
      House existingHouse = houseRepository.findById(houseDto.getHouseId())
            .orElseThrow(() -> new RuntimeException("House not found"));

    // Update fields of the existing house
       existingHouse.setHousename(houseDto.getHousename());
       existingHouse.setMeterNumber(houseDto.getMeterNumber());
       existingHouse.setAddress(houseDto.getAddress());
       existingHouse.setCity(houseDto.getCity());
       existingHouse.setState(houseDto.getState());

       // Assuming you have a method to find User by username
       User newUser = userRepository.findByUsername(houseDto.getOwner())
            .orElseThrow(() -> new RuntimeException("User not found"));

       existingHouse.setUser(newUser);

      // Update the house entity with the new user
      for (Bill bill : existingHouse.getBills()) {
        bill.setHouse(existingHouse);
    }

    // Save the updated house entity
    House updatedHouse = houseRepository.save(existingHouse);

    return convertToDto(updatedHouse);
   }

    @Override
     public boolean hasMeterNumber(String number) {
       return houseRepository.findByMeterNumber(number).isPresent();
    }

    @Override
    public List<String> getAllHouseNames() {
        return houseRepository.findAllHouseNames();
    }

    @Override
    public List<HouseDto> findHousesByUser(UserDto userDto) {
        // Fetch houses based on the userId from UserDto
        List<House> houses = houseRepository.findByUser_UserId(userDto.getUserId());
        return houses.stream()
                     .map(this::convertToDto)
                     .collect(Collectors.toList());
    }


    @Override
    public HouseDto convertToDto(House house) {
        HouseDto houseDto = new HouseDto();
        houseDto.setHouseId(house.getHouseId());
        houseDto.setHousename(house.getHousename());
        houseDto.setMeterNumber(house.getMeterNumber());
        houseDto.setAddress(house.getAddress());
        houseDto.setCity(house.getCity());
        houseDto.setState(house.getState());
        houseDto.setOwner(house.getUser().getUsername()); // Assuming User has a getUsername() method
        return houseDto;
    }

    @Override
    public House convertToEntity(HouseDto houseDto) {
        House house = new House();
        house.setHouseId(houseDto.getHouseId());
        house.setHousename(houseDto.getHousename());
        house.setMeterNumber(houseDto.getMeterNumber());
        house.setAddress(houseDto.getAddress());
        house.setCity(houseDto.getCity());
        house.setState(houseDto.getState());
        house.setDate(new Date());
        
        // Assuming you have a method to find User by username
        User user = userRepository.findByUsername(houseDto.getOwner()).orElseThrow(() -> new RuntimeException("User not found"));
        house.setUser(user);
        
        return house;
    }

    


    
}
