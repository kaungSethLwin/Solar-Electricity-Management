package com.example.SEB.entities;

import java.util.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
@Entity
public class House {

     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int houseId;

    @Column(name = "HOUSE_NAME",nullable = false)
	private String housename;


    @Column(name = "METER_NUMBER",nullable = false,unique = true)
	private String meterNumber;
	
	@Column(name = "ADDRESS",nullable = false)
	private String address;
	
	@Column(name = "CITY",nullable = false)
	private String city;
	
	@Column(name = "STATE",nullable = false)
	private String state;

    @ManyToOne(cascade = CascadeType.REMOVE) // Cascade remove to handle deletion of houses when a user is deleted
    @JoinColumn(name = "USER_ID")
    private User user;

    @OneToMany(mappedBy = "house", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Bill> bills;
    
    @Column(name = "DATE")
    private Date date; 
    
}
