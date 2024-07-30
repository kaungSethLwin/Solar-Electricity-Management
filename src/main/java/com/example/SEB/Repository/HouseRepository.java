package com.example.SEB.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.SEB.entities.House;

public interface HouseRepository extends JpaRepository<House,Integer> {
    
    Optional<House> findByMeterNumber(String meterNumber);

    // Find all houses by city
    List<House> findByCity(String city);

    // Find all houses by state
    List<House> findByState(String state);

    // Find all houses associated with a specific user ID
    List<House> findByUser_UserId(Integer userId);

    Optional<House> findByHousename(String housename);

     @Query("SELECT h FROM House h JOIN h.user u WHERE u.username = :ownerName")
    List<House> findByOwnerName(@Param("ownerName") String ownerName);
    
    @Query("SELECT h.housename FROM House h")
    List<String> findAllHouseNames();


    
}
