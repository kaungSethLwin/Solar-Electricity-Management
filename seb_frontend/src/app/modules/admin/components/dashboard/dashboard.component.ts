import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { StorageService } from '../../../../service/storage/storage.service';
import { Router } from '@angular/router';
import { PrimeNGSharedModule } from './primeng-shared.module';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { Table } from 'primeng/table';
import { MatDialog } from '@angular/material/dialog';
import { ComfirmDialogComponent } from '../../../comfirm-dialog/comfirm-dialog.component';
import { UserRole } from './user-role';
import { DialogModule } from 'primeng/dialog';
import { SignUpRequest } from './SignUpRequest';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,PrimeNGSharedModule,FormsModule,DialogModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  UserRole = UserRole; 

  houses: any[] = [];
  house: any;
  bills: any[] = [];
  bill: any;
  users: any[] = [];
  reports: any[] = [];
  report: any;
  user: any;
  username: string | undefined;
  selectedUser : any ={};

  displayHouses: boolean = true;
  displayBills: boolean = false;
  displayUsers: boolean = false;
  displayReport: boolean= false;
  displayUserForm: boolean = false;
  
  isUserEditMode: boolean = false;
  searchOwner: any;
  searchStatus: any;
  searchUsername: any;
  errorMessage: string | null = null;


  @ViewChild('dt2') dt2: Table | undefined;



  
  constructor(private adminService: AdminService, private router: Router,private dialog: MatDialog) { }

  ngOnInit(): void {
    // Initialize data on component load
    this.getAllHouses();
    this.getAllBills();
    this.getAllUsers();
    this.getAllReport();
    this.username = this.showUserName(); 
    
  }

  showUserName(): string {
    return StorageService.getUsername(); 
  }

  showDialog(): void {
    this.selectedUser = {};
    this.displayUserForm = true;
    this.isUserEditMode = true;
  }

  onGlobalFilter(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
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
    console.log('Deleting house with ID:', houseId); // Log to verify the value
    if (houseId === undefined || houseId === null) {
        console.error('House ID is invalid:', houseId);
        return;
    }

    const dialogRef = this.dialog.open(ComfirmDialogComponent, {
        data: { message: 'Are you sure you want to delete this house?' }
    });

    dialogRef.afterClosed().subscribe(result => {
        if (result) {
            this.adminService.deleteHouse(houseId).subscribe(
                () => {
                    console.log('House deleted');
                    this.getAllHouses();
                },
                (error) => {
                    console.error('Error deleting house:', error);
                }
            );
        } else {
            console.log('House deletion canceled');
        }
    });
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

    const dialogRef = this.dialog.open(ComfirmDialogComponent, {
      data: { message: 'Are you sure you want to delete this Bills?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.adminService.deleteBill(billId).subscribe(
          () => {
            console.log('Bill deleted');
            this.getAllBills();
          },
          (error) => {
            console.error('Error deleting bill:', error);
          }
        );
      } else {
        console.log('House deletion bill');
      }
    });
      }



      updateUser(user: any): void {
        this.selectedUser = { ...user }; // Copy the user data to selectedUser
        this.isUserEditMode = true;
        this.displayUserForm = true;
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
    const dialogRef = this.dialog.open(ComfirmDialogComponent, {
      data: { message: 'Are you sure you want to delete this user? If customer is deleted the house will be also deleted' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.adminService.deleteUser(userId).subscribe(
          () => {
            console.log('user deleted');
            this.getAllBills();
          },
          (error) => {
            console.error('Error deleting user:', error);
          }
        );
      } else {
        console.log('Bill deletion canceled');
      }
    });
      }

      onSubmitUser(form: any): void {
        if (this.isUserEditMode) {
          this.adminService.updateUser(this.selectedUser).subscribe(
            (response) => {
              console.log('User updated:', response);
              this.getAllUsers();
              this.displayUserForm = false;
            },
            (error) => {
              console.error('Error updating user:', error);
              this.errorMessage = error.error.message;
            }
          );
        } else {
          this.adminService.createUser(this.selectedUser).subscribe(
            (response) => {
              console.log('User created:', response);
              this.getAllUsers();
              this.displayUserForm = false;
            },
            (error) => {
              console.error('Error creating user:', error);
              this.errorMessage = error.error.message;
            }
          );
        }
      }

  //Reports
  getAllReport():void{
    this.adminService.getAllreports().subscribe(
      (response) =>{
        this.reports =response;
        console.log("Reports: ", this.reports );
      },
      (error) => {
        console.error('Error fetching all Reports: ', error);
      }
    )
  }


  logout(){
    StorageService.logout();
    this.router.navigateByUrl("/login");
   }

   showHouses(): void {
    this.displayHouses = true;
    this.displayBills = false;
    this.displayUsers = false;
    this.displayReport = false;
  }

  showBills(): void {
    this.displayHouses = false;
    this.displayBills = true;
    this.displayUsers = false;
    this.displayReport = false;
  }

  showUsers(): void {
    this.displayHouses = false;
    this.displayBills = false;
    this.displayUsers = true;
    this.displayReport = false;
  }  
  showReports(): void {
    this.displayHouses = false;
    this.displayBills = false;
    this.displayUsers = false;
    this.displayReport = true;
  }  
}
