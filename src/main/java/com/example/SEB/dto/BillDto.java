package com.example.SEB.dto;

import java.util.Date;

import com.example.SEB.enums.Status;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Data;

@Data
public class BillDto {
    
    private int billId;
    private double usedUnit;
    private double total;
    @Enumerated(EnumType.STRING)
    private Status billStatus;
    private Date billDate;
    private Date dueDate;
    private Date paidDate;
    private String housename; 
    private String meterNumber;
    private String owner;
}
