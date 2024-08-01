# Solar Electricity Billing System

## Overview

This project is a Solar Electricity Billing System that includes a backend implemented with Spring Boot and a frontend using Angular. It provides functionalities for managing bills, users, and houses, and includes features for generating and printing bills.

## Prerequisites

- **Java 17**: Required for running the Spring Boot application.
- **Node.js 20.12.1**: Required for running the Angular application.
- **Maven**: Used to build and run the Spring Boot application.
- **npm**: Used to manage and run Angular dependencies.

## Setup

### 1. Database Configuration

1. **MySQL Database Setup**

   Update your MySQL database connection settings in the `src/main/resources/application.properties` file of your Spring Boot project. Replace the placeholders with your actual database setup details:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.show-sql=true

### 2. On Delete Cascade on all 3 tables

### 3. To use
To run the backend 
run: mvn clean install
run: mvn spring-boot:run


To run the frontend
go to seb_frontend
run: ng serve
