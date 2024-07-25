package com.example.SEB.service;

import com.example.SEB.entities.Bill;
import com.example.SEB.entities.House;
import com.example.SEB.enums.Status;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.example.SEB.Repository.BillRepository;
import com.example.SEB.Repository.HouseRepository;
import com.example.SEB.dto.BillDto;
import com.example.SEB.dto.HouseDto;

@Service
@RequiredArgsConstructor
public class BillServiceImpl implements BillService {

   
    private final BillRepository billRepository;
    private final HouseService houseService;
    private final HouseRepository houseRepository; 

    @Override
    @Transactional
    public BillDto saveBill(BillDto billDto) {
        Bill bill = convertToEntity(billDto);
    
        // Get houseName from billDto
        String houseName = billDto.getHousename();
    
        if (houseName != null && !houseName.isEmpty()) {
            // Find the house by its name
            House house = houseRepository.findByHousename(houseName)
                .orElseThrow(() -> new IllegalArgumentException("House not found"));
    
            // Set the house in the Bill entity
            bill.setHouse(house);
    
            // Set the owner in the BillDto
            billDto.setOwner(house.getUser() != null ? house.getUser().getUsername() : null);
        } else {
            throw new IllegalArgumentException("House name must be provided");
        }
    
        // Save the bill
        bill = billRepository.save(bill);
    
        return convertToDto(bill);
    }
    

    

    


    @Override
    public Optional<BillDto> getBillById(int billId) {
        return billRepository.findById(billId).map(this::convertToDto);
    }

    @Override
    public List<BillDto> getAllBills() {
        return billRepository.findAll().stream().map(this::convertToDto).collect(Collectors.toList());
    }

    @Override
    public void deleteBill(int billId) {
        if (billRepository.existsById(billId)) {
            billRepository.deleteById(billId);
        } else {
            throw new RuntimeException("Bill with ID " + billId + " does not exist.");
        }
    }

    @Override
    public List<BillDto> findBillsByStatus(Status status) {
        return billRepository.findByBillStatus(status).stream().map(this::convertToDto).collect(Collectors.toList());
    }

    @Override
    public List<BillDto> findBillsByHouseId(int houseId) {
        return billRepository.findByHouse_HouseId(houseId).stream().map(this::convertToDto).collect(Collectors.toList());
    }

    @Override
    public List<BillDto> findBillsByDateRange(Date startDate, Date endDate) {
        return billRepository.findByBillDateBetween(startDate, endDate).stream().map(this::convertToDto).collect(Collectors.toList());
    }

    @Override
    public List<BillDto> findBillsByDueDate(Date dueDate) {
        return billRepository.findByDueDate(dueDate).stream().map(this::convertToDto).collect(Collectors.toList());
    }

    @Override
    public List<BillDto> findBillsByPaidDate(Date paidDate) {
        return billRepository.findByPaidDate(paidDate).stream().map(this::convertToDto).collect(Collectors.toList());
    }

    @Override
    public List<BillDto> findUnpaidBillsByHouses(List<HouseDto> houses) {
        List<House> houseEntities = houses.stream().map(houseService::convertToEntity).collect(Collectors.toList());
        return billRepository.findByHouseInAndBillStatus(houseEntities, Status.UNPAID).stream().map(this::convertToDto).collect(Collectors.toList());
    }

    @Override
   public BillDto convertToDto(Bill bill) {
    BillDto billDto = new BillDto();
    billDto.setBillId(bill.getBillId());
    billDto.setUsedUnit(bill.getUsedUnit());
    billDto.setTotal(bill.getTotal());
    billDto.setBillStatus(bill.getBillStatus());
    billDto.setBillDate(bill.getBillDate());
    billDto.setDueDate(bill.getDueDate());
    billDto.setPaidDate(bill.getPaidDate());
    
    if (bill.getHouse() != null) {
        // Set the house name directly
        billDto.setHousename(bill.getHouse().getHousename());
    }

    // Optionally set the owner if you have the information
    if (bill.getHouse() != null && bill.getHouse().getUser() != null) {
        billDto.setOwner(bill.getHouse().getUser().getUsername());
    }

    return billDto;
}


@Override
public Bill convertToEntity(BillDto billDto) {
    Bill bill = new Bill();
    bill.setBillId(billDto.getBillId());
    bill.setUsedUnit(billDto.getUsedUnit());
    bill.setTotal(billDto.getTotal());
    bill.setBillStatus(billDto.getBillStatus());
    bill.setBillDate(billDto.getBillDate());
    bill.setDueDate(billDto.getDueDate());
    bill.setPaidDate(billDto.getPaidDate());
    
    if (billDto.getHousename() != null) {
        // Fetch the house entity by house name
        House house = houseRepository.findByHousename(billDto.getHousename())
            .orElseThrow(() -> new IllegalArgumentException("House not found"));

        bill.setHouse(house);
    } else {
        throw new IllegalArgumentException("House name must be provided");
    }

    return bill;
}


     

}
