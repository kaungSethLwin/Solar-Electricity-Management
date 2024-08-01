package com.example.SEB.dto;

import java.util.Date;


import lombok.Data;

@Data
public class ReportDto {
    private int houseId;
    private int billId;
    private String username;
    private String housename;
    private String meternumber;
    private double usedUnit;
    private double total;
    private String billStatus;
    private Date createDate;
    private Date paidDate;
    private Date dueDate;

}
