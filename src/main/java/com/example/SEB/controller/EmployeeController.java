package com.example.SEB.controller;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.SEB.dto.BillDto;
import com.example.SEB.dto.HouseDto;
import com.example.SEB.dto.ReportDto;
import com.example.SEB.dto.UserDto;
import com.example.SEB.service.BillService;
import com.example.SEB.service.HouseService;
import com.example.SEB.service.ReportService;
import com.example.SEB.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/employee")
@CrossOrigin(origins = "*") 
@RequiredArgsConstructor
public class EmployeeController {

 private final HouseService houseService;
private final BillService billService;
 private final ReportService reportService;
 private final UserService userService;


   
 @PostMapping("/houses/create")
 public ResponseEntity<HouseDto> createHouse(@RequestBody HouseDto houseDto) {
     if (houseService.hasMeterNumber(houseDto.getMeterNumber())) {
         return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(null);
     }
     HouseDto savedHouse = houseService.saveHouse(houseDto);
     if (savedHouse == null) {
         return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
     }
     return ResponseEntity.status(HttpStatus.CREATED).body(savedHouse);
 }

 // Update a house
 @PostMapping("/houses/update")
 public ResponseEntity<HouseDto> updateHouse(@RequestBody HouseDto houseDto) {
    HouseDto updateHouse = houseService.updateHouse(houseDto);
    return new ResponseEntity<>(updateHouse, HttpStatus.CREATED);
 }



// Retrieve a house by its ID
@GetMapping("/houses/{houseId}")
public ResponseEntity<HouseDto> getHouseById(@PathVariable int houseId) {
    Optional<HouseDto> houseDto = houseService.getHouseById(houseId);
    return houseDto.map(ResponseEntity::ok)
                   .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
}

// Retrieve all houses
@GetMapping("/houses")
public ResponseEntity<List<HouseDto>> getAllHouses() {
    List<HouseDto> houses = houseService.getAllHouses();
    return new ResponseEntity<>(houses, HttpStatus.OK);
}

@GetMapping("/houses/names")
 public ResponseEntity<List<String>> getAllHouseNames() {
     List<String> housenames = houseService.getAllHouseNames();
     return new ResponseEntity<>(housenames, HttpStatus.OK);
 }

// Delete a house by its ID
@DeleteMapping("/houses/{houseId}")
public ResponseEntity<Void> deleteHouse(@PathVariable int houseId) {
    try {
        houseService.deleteHouse(houseId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (RuntimeException e) {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}

 @PostMapping("/bills/create")
 public ResponseEntity<BillDto> createBill(@RequestBody BillDto billDto) {
 
 BillDto savedBill = billService.saveBill(billDto);
 
 return new ResponseEntity<>(savedBill, HttpStatus.CREATED);
}



//Update Bills
@PostMapping("/bills/update")
public ResponseEntity<BillDto> updateBill(@RequestBody BillDto billDto) {
    BillDto savedBill = billService.saveBill(billDto);
    return new ResponseEntity<>(savedBill, HttpStatus.CREATED);
}


 // Retrieve all bills
 @GetMapping("/bills")
 public ResponseEntity<List<BillDto>> getAllBills() {
     List<BillDto> bills = billService.getAllBills();
     return new ResponseEntity<>(bills, HttpStatus.OK);
 }

 // Delete a bill by its ID
 @DeleteMapping("/bills/{billId}")
 public ResponseEntity<Void> deleteBill(@PathVariable int billId) {
     try {
         billService.deleteBill(billId);
         return new ResponseEntity<>(HttpStatus.NO_CONTENT);
     } catch (RuntimeException e) {
         return new ResponseEntity<>(HttpStatus.NOT_FOUND);
     }
 }

    
    
    @GetMapping("/reports/dashboard")
    public ResponseEntity<List<ReportDto>> getDashboardReport() {
        List<ReportDto> reportData = reportService.getReportData();
        return new ResponseEntity<>(reportData, HttpStatus.OK);
    }

       @GetMapping("/users/customers")
      public ResponseEntity<List<UserDto>> getCustomers() {
         List<UserDto> customers = userService.getAllCustomers();
         return new ResponseEntity<>(customers, HttpStatus.OK);
      }
}
