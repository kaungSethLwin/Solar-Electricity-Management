package com.example.SEB.entities;

import java.util.Date;

import com.example.SEB.enums.Status;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;


@Data
@Entity
public class Bill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int billId;

    @Column(name="USED_UNIT", nullable = false)
    private double usedUnit;

    @Column(name="TOTAL", nullable = false)
    private double total;

    @Column(name="BILL_STATUS")
    @Enumerated(EnumType.STRING) 
    private Status billStatus;

    @Column(name="BIll_DATE")
    private Date billDate;

    @Column(name="DUE_DATE")
    private Date dueDate;

    @Column(name="PAID_DATE")
    private Date paidDate;

    @Column(name="meter_number")
    private String meterNumber;

    @Column(name="house_number")
    private String housenumber;

    @Column(name="owner")
    private String owner;

    @ManyToOne(cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JoinColumn(name = "HOUSE_ID")
    private House house;
}
