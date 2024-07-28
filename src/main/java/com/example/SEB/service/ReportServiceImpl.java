package com.example.SEB.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.SEB.Repository.BillRepository;
import com.example.SEB.dto.ReportDto;
import com.example.SEB.entities.Bill;
import com.example.SEB.entities.House;
import com.example.SEB.entities.User;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReportServiceImpl implements ReportService {

    private final BillRepository billRepository;

    @Override
    public List<ReportDto> getReportData() {
         List<ReportDto> reportData = new ArrayList<>();

        List<Bill> bills = billRepository.findAll(); // Fetch all bills or use specific criteria

        for (Bill bill : bills) {
            House house = bill.getHouse();
            User user = house != null ? house.getUser() : null;

            ReportDto dto = new ReportDto();
            dto.setHouseId(house != null ? house.getHouseId() : 0);
            dto.setBillId(bill.getBillId());
            dto.setUsername(user != null ? user.getUsername() : "Unknown");
            dto.setUsedUnit(bill.getUsedUnit());
            dto.setTotal(bill.getTotal());
            dto.setBillStatus(bill.getBillStatus().name());
            dto.setCreateDate(bill.getBillDate());
            dto.setPaidDate(bill.getPaidDate());
            dto.setDueDate(bill.getDueDate());

            reportData.add(dto);
        }

        return reportData;
    }
    
}
