import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { StorageService } from '../../../../service/storage/storage.service';
import { Router } from '@angular/router';
import { PrimeNGSharedModule } from './primeng-shared.module';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { Table } from 'primeng/table';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,PrimeNGSharedModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  houses: any[] = [];
  house: any;
  bills: any[] = [];
  bill: any;
  users: any[] = [];
  user: any;
  username: string | undefined;

  displayHouses: boolean = true;
  displayBills: boolean = false;
  displayUsers: boolean = false;
  searchOwner: any;
  searchStatus: any;
  searchUsername: any;

  value:any;

  @ViewChild('dt2') dt2: Table | undefined;


  
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    // Initialize data on component load
    this.getAllHouses();
    this.getAllBills();
    this.getAllUsers();
    this.username = this.showUserName(); 
    
  }

  showUserName(): string {
    return StorageService.getUsername(); 
  }

  onGlobalFilter(value: string) {
    if (this.dt2) {
      this.dt2.filterGlobal(value, 'contains');
    }
  }
  

  // House endpoints
  createOrUpdateHouse(house: any): void {
    this.adminService.createOrUpdateHouse(house).subscribe(
      (response) => {
        console.log('House created/updated:', response);
        this.getAllHouses();
      },
      (error) => {
        console.error('Error creating/updating house:', error);
      }
    );
  }

  getHouseById(houseId: number): void {
    this.adminService.getHouseById(houseId).subscribe(
      (response) => {
        this.house = response;
        console.log('House details:', this.house);
      },
      (error) => {
        console.error('Error fetching house details:', error);
      }
    );
  }

  getAllHouses(): void {
    this.adminService.getAllHouses().subscribe(
      (response) => {
        this.houses = response;
        console.log('All houses:', this.houses);
      },
      (error) => {
        console.error('Error fetching all houses:', error);
      }
    );
  }

  deleteHouse(houseId: number): void {
    this.adminService.deleteHouse(houseId).subscribe(
      () => {
        console.log('House deleted');
        this.getAllHouses();
      },
      (error) => {
        console.error('Error deleting house:', error);
      }
    );
  }


  findHouseByMeterNumber(meterNumber: string): void {
    this.adminService.findHouseByMeterNumber(meterNumber).subscribe(
      (response) => {
        this.house = response;
        console.log('House by meter number:', this.house);
      },
      (error) => {
        console.error('Error finding house by meter number:', error);
      }
    );
  }

  findHousesByCity(city: string): void {
    this.adminService.findHousesByCity(city).subscribe(
      (response) => {
        this.houses = response;
        console.log('Houses by city:', this.houses);
      },
      (error) => {
        console.error('Error finding houses by city:', error);
      }
    );
  }

  findHousesByState(state: string): void {
    this.adminService.findHousesByState(state).subscribe(
      (response) => {
        this.houses = response;
        console.log('Houses by state:', this.houses);
      },
      (error) => {
        console.error('Error finding houses by state:', error);
      }
    );
  }

  findHousesByUserId(userId: number): void {
    this.adminService.findHousesByUserId(userId).subscribe(
      (response) => {
        this.houses = response;
        console.log('Houses by user ID:', this.houses);
      },
      (error) => {
        console.error('Error finding houses by user ID:', error);
      }
    );
  }

  // Bill endpoints
  createOrUpdateBill(bill: any): void {
    this.adminService.createOrUpdateBill(bill).subscribe(
      (response) => {
        console.log('Bill created/updated:', response);
        this.getAllBills();
      },
      (error) => {
        console.error('Error creating/updating bill:', error);
      }
    );
  }

  getBillById(billId: number): void {
    this.adminService.getBillById(billId).subscribe(
      (response) => {
        this.bill = response;
        console.log('Bill details:', this.bill);
      },
      (error) => {
        console.error('Error fetching bill details:', error);
      }
    );
  }

  getAllBills(): void {
    this.adminService.getAllBills().subscribe(
      (response) => {
        this.bills = response;
        console.log('All bills:', this.bills);
      },
      (error) => {
        console.error('Error fetching all bills:', error);
      }
    );
  }

  deleteBill(billId: number): void {
    this.adminService.deleteBill(billId).subscribe(
      () => {
        console.log('Bill deleted');
        this.getAllBills();
      },
      (error) => {
        console.error('Error deleting bill:', error);
      }
    );
  }

  findBillsByStatus(status: string): void {
    this.adminService.findBillsByStatus(status).subscribe(
      (response) => {
        this.bills = response;
        console.log('Bills by status:', this.bills);
      },
      (error) => {
        console.error('Error finding bills by status:', error);
      }
    );
  }

  findBillsByHouseId(houseId: number): void {
    this.adminService.findBillsByHouseId(houseId).subscribe(
      (response) => {
        this.bills = response;
        console.log('Bills by house ID:', this.bills);
      },
      (error) => {
        console.error('Error finding bills by house ID:', error);
      }
    );
  }

  findBillsByDateRange(startDate: string, endDate: string): void {
    this.adminService.findBillsByDateRange(startDate, endDate).subscribe(
      (response) => {
        this.bills = response;
        console.log('Bills by date range:', this.bills);
      },
      (error) => {
        console.error('Error finding bills by date range:', error);
      }
    );
  }

  findBillsByDueDate(dueDate: string): void {
    this.adminService.findBillsByDueDate(dueDate).subscribe(
      (response) => {
        this.bills = response;
        console.log('Bills by due date:', this.bills);
      },
      (error) => {
        console.error('Error finding bills by due date:', error);
      }
    );
  }

  findBillsByPaidDate(paidDate: string): void {
    this.adminService.findBillsByPaidDate(paidDate).subscribe(
      (response) => {
        this.bills = response;
        console.log('Bills by paid date:', this.bills);
      },
      (error) => {
        console.error('Error finding bills by paid date:', error);
      }
    );
  }

  // User endpoints
  createOrUpdateUser(user: any): void {
    this.adminService.createOrUpdateUser(user).subscribe(
      (response) => {
        console.log('User created/updated:', response);
        this.getAllUsers();
      },
      (error) => {
        console.error('Error creating/updating user:', error);
      }
    );
  }

  getUserById(userId: number): void {
    this.adminService.getUserById(userId).subscribe(
      (response) => {
        this.user = response;
        console.log('User details:', this.user);
      },
      (error) => {
        console.error('Error fetching user details:', error);
      }
    );
  }

  getAllUsers(): void {
    this.adminService.getAllUsers().subscribe(
      (response) => {
        this.users = response;
        console.log('All users:', this.users);
      },
      (error) => {
        console.error('Error fetching all users:', error);
      }
    );
  }

  deleteUser(userId: number): void {
    this.adminService.deleteUser(userId).subscribe(
      () => {
        console.log('User deleted');
        this.getAllUsers();
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }

  findUserByUsername(username: string): void {
    this.adminService.findUserByUsername(username).subscribe(
      (response) => {
        this.user = response;
        console.log('User by username:', this.user);
      },
      (error) => {
        console.error('Error finding user by username:', error);
      }
    );
  }

  logout(){
    StorageService.logout();
    this.router.navigateByUrl("/login");
   }

   showHouses(): void {
    this.displayHouses = true;
    this.displayBills = false;
    this.displayUsers = false;
  }

  showBills(): void {
    this.displayHouses = false;
    this.displayBills = true;
    this.displayUsers = false;
  }

  showUsers(): void {
    this.displayHouses = false;
    this.displayBills = false;
    this.displayUsers = true;
  }
}
