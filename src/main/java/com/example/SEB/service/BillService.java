package com.example.SEB.service;

import com.example.SEB.dto.BillDto;
import com.example.SEB.dto.HouseDto;
import com.example.SEB.entities.Bill;
import com.example.SEB.enums.Status;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface BillService {

    // Create or update a bill
    BillDto saveBill(BillDto billDto);

    // Retrieve a bill by its ID
    Optional<BillDto> getBillById(int billId);

    // Retrieve all bills
    List<BillDto> getAllBills();

    // Delete a bill by its ID
    void deleteBill(int billId);

    // Find all bills by status
    List<BillDto> findBillsByStatus(Status status);

    // Find all bills for a specific house
    List<BillDto> findBillsByHouseId(int houseId);

    // Find all bills by date range
    List<BillDto> findBillsByDateRange(Date startDate, Date endDate);

    // Find all bills by due date
    List<BillDto> findBillsByDueDate(Date dueDate);

    // Find all bills by paid date
    List<BillDto> findBillsByPaidDate(Date paidDate);

    List<BillDto> findUnpaidBillsByHouses(List<HouseDto> houses);

    // Convert Bill entity to BillDto
    BillDto convertToDto(Bill bill);

    // Convert BillDto to Bill entity
    Bill convertToEntity(BillDto billDto);

    List<BillDto> getAllBillsByHouses(List<HouseDto> houseDtos);
}
