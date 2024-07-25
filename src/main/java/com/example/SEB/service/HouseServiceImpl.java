package com.example.SEB.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SEB.Repository.HouseRepository;
import com.example.SEB.Repository.UserRepository;
import com.example.SEB.dto.HouseDto;
import com.example.SEB.entities.House;
import com.example.SEB.entities.User;


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
    public Optional<HouseDto> findHouseByMeterNumber(String meterNumber) {
        return houseRepository.findByMeterNumber(meterNumber).map(this::convertToDto);
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
        
        // Assuming you have a method to find User by username
        User user = userRepository.findByUsername(houseDto.getOwner()).orElseThrow(() -> new RuntimeException("User not found"));
        house.setUser(user);
        
        return house;
    }



    
}
