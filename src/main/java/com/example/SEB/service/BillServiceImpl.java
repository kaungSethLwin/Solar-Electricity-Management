package com.example.SEB.service;

import com.example.SEB.entities.Bill;
import com.example.SEB.entities.House;
import com.example.SEB.enums.Status;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.Calendar;
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
     System.out.println("BILL DTO:" + billDto.toString());

     Bill savedBill = billRepository.save(bill);
    return convertToDto(savedBill);
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
     // Set the current date as the bill date
    Date billDate = new Date();
    billDto.setBillDate(billDate);

    // Calculate the due date as 15 days after the bill date
    Calendar calendar = Calendar.getInstance();
    calendar.setTime(billDate);
    calendar.add(Calendar.DAY_OF_MONTH, 15);
    Date dueDate = calendar.getTime();
    billDto.setDueDate(dueDate);
    // Set the paid date based on the status change
    if (bill.getBillStatus() == Status.PAID) {
        billDto.setPaidDate(bill.getPaidDate() != null ? bill.getPaidDate() : new Date());
    } else {
        billDto.setPaidDate(null); // or set it to some default value if needed
    }

    
    if (bill.getHouse() != null) {
        billDto.setHousename(bill.getHouse().getHousename());
        billDto.setMeterNumber(bill.getMeterNumber());
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

    // Set the bill date to the current date and time
    Date billDate = new Date();
    bill.setBillDate(billDate);

    // Calculate the due date as 15 days after the bill date
    Calendar calendar = Calendar.getInstance();
    calendar.setTime(billDate);
    calendar.add(Calendar.DAY_OF_MONTH, 15);
    Date dueDate = calendar.getTime();
    bill.setDueDate(dueDate);

    // Set the paid date based on the status change
    if (bill.getBillStatus() == Status.PAID) {
        bill.setPaidDate(billDto.getPaidDate() != null ? billDto.getPaidDate() : new Date());
    } else {
        bill.setPaidDate(null); // or set it to some default value if needed
    }

    String housename = billDto.getHousename();
    House house = houseRepository.findByHousename(housename)
        .orElseThrow(() -> new RuntimeException("House not found with name: " + housename));
    bill.setHouse(house);
    bill.setMeterNumber(house.getMeterNumber());
    bill.setOwner(house.getUser().getUsername());

    return bill;
}




@Override
public List<BillDto> getAllBillsByHouses(List<HouseDto> houseDtos) {
    List<Integer> houseIds = houseDtos.stream()
    .map(HouseDto::getHouseId)
    .collect(Collectors.toList());

    List<Bill> bills = billRepository.findAllBillsByHouseIds(houseIds);

    return bills.stream().map(this::convertToDto).collect(Collectors.toList());
}

}
