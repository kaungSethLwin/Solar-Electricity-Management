    package com.example.SEB.controller;

    import com.example.SEB.dto.BillDto;
    import com.example.SEB.dto.HouseDto;
    import com.example.SEB.service.BillService;
    import com.example.SEB.service.HouseService;
    import com.example.SEB.service.UserService;

    import lombok.RequiredArgsConstructor;

    import com.example.SEB.entities.User;
    import com.example.SEB.entities.House;
    import org.springframework.http.HttpStatus;
    import org.springframework.http.ResponseEntity;
    import org.springframework.security.core.Authentication;
    import org.springframework.security.core.context.SecurityContextHolder;
    import org.springframework.web.bind.annotation.CrossOrigin;
    import org.springframework.web.bind.annotation.GetMapping;
    import org.springframework.web.bind.annotation.RequestMapping;
    import org.springframework.web.bind.annotation.RestController;

    import java.util.List;
    import java.util.Optional;
    import java.util.stream.Collectors;

    @RestController
    @RequestMapping("/api/customer")
    @RequiredArgsConstructor
    @CrossOrigin(origins = "*") 
    public class CustomerController {

        private final BillService billService;
        private final UserService userService;
        private final HouseService houseService;

    @GetMapping("/bills")
        public ResponseEntity<List<BillDto>> getBills() {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            String username = authentication.getName();

            System.out.println("username " + username);
            
            // Fetch the user based on the username
            Optional<User> user = userService.findByUsername(username);
            
            if (user.isEmpty()) {
                // Return NOT_FOUND if the user is not found
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            
            // Get the houses associated with the user
            List<House> houses = user.get().getHouses();
            
            if (houses.isEmpty()) {
                // Return NO_CONTENT if no houses are associated with the user
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            
            // Convert houses to HouseDto
            List<HouseDto> houseDtos = houses.stream()
                                             .map(houseService::convertToDto)
                                             .collect(Collectors.toList());
            
            // Get all bills by house DTOs
            List<BillDto> bills = billService.getAllBillsByHouses(houseDtos);
            
            return new ResponseEntity<>(bills, HttpStatus.OK);
        }
        
       
    }

