package com.example.SEB.controller;

import com.example.SEB.dto.ReportDto;
import com.example.SEB.service.ReportService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/reports")
@CrossOrigin(origins = "*") 
@RequiredArgsConstructor
public class ReportController {

    private final ReportService reportService;

    @GetMapping("/dashboard")
    public ResponseEntity<List<ReportDto>> getDashboardReport() {
        List<ReportDto> reportData = reportService.getReportData();
        return new ResponseEntity<>(reportData, HttpStatus.OK);
    }
}
