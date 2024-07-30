package com.example.SEB.Repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.SEB.entities.Bill;
import com.example.SEB.entities.House;
import com.example.SEB.enums.Status;

public interface BillRepository extends JpaRepository<Bill,Integer> {
    
     // Find all bills by status
     List<Bill> findByBillStatus(Status status);

     // Find all bills for a specific house
     List<Bill> findByHouse_HouseId(int houseId);
 
     // Find all bills by date range
     List<Bill> findByBillDateBetween(Date startDate, Date endDate);
 
     // Find all bills by due date
     List<Bill> findByDueDate(Date dueDate);
 
     // Find all bills by paid date
     List<Bill> findByPaidDate(Date paidDate);

      List<Bill> findByHouseInAndBillStatus(List<House> houses, Status billStatus);

      @Query("SELECT b FROM Bill b WHERE b.house.id IN :houseIds")
    List<Bill> findAllBillsByHouseIds(List<Integer> houseIds);
}
