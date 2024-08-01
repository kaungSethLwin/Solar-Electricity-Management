import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { StorageService } from '../../../../service/storage/storage.service';
import { Router } from '@angular/router';
import { PrimeNGSharedModule } from './primeng-shared.module';
import { CommonModule } from '@angular/common'; 
import { FormsModule, NgForm } from '@angular/forms';
import { Table } from 'primeng/table';
import { MatDialog } from '@angular/material/dialog';
import { ComfirmDialogComponent } from '../../../comfirm-dialog/comfirm-dialog.component';
import { UserRole } from './user-role';
import { DialogModule } from 'primeng/dialog';
import { Status } from './BillStatus';



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
  customers: any[] = [];
  allHousesnames: any[] = [];
  statusOptions: Status[] = []
  report: any;
  user: any;
  showusername: string = '';
  selectedUser : any ={};
  selectedHouse : any = {};
  selectedBill : any ={};

  displayHouses: boolean = true;
  displayBills: boolean = false;
  displayUsers: boolean = false;
  displayReport: boolean= false;
  displayUserForm: boolean = false;
  displayHouseForm: boolean =false;
  displayBillForm:boolean =false;
  isHouseEditMode: boolean = false;
  isUserEditMode: boolean = false;
  isBillEditMode: boolean = false;
  
  searchOwner: any;
  searchStatus: any;
  searchUsername: any;
  errorMessage: string | null = null;
  private readonly ratePerUnit = 100;


  @ViewChild('dt2') dt2: Table | undefined;



  
  constructor(private adminService: AdminService, private router: Router,private dialog: MatDialog) { }

  ngOnInit(): void {
    // Initialize data on component load
    this.getAllHouses();
    this.getAllBills();
    this.getAllUsers();
    this.getAllReport();
    this.getAllCustomers();
    this.getAllHousenames();
    this.showusername = this.showUserName(); 
    console.log('Username:', this.showusername);
    console.log(typeof this.showusername);
    this.statusOptions = [
      Status.UNPAID,
      Status.PAID,
      Status.OVERDUE
    ];

    
  }

  showUserName(): string {
    return StorageService.getUsername(); 
    
  }

  showDialogforUser(): void {
    this.selectedUser = {};
    this.displayUserForm = true;
    this.isUserEditMode = false;
  }

  showDialogforHouse(): void {
    this.selectedHouse = {};
    this.displayHouseForm = true;
    this.isHouseEditMode = false;
  }

  showDialogforBill():void{
    this.selectedBill = {};
    this.displayBillForm =true;
    this.isBillEditMode = false;
  }

  onGlobalFilter(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    if (this.dt2) {
      this.dt2.filterGlobal(value, 'contains');
    }
  }
  


  updateHouse(house: any): void {
    this.selectedHouse = { ...house }; 
    this.isHouseEditMode = true;
    this.displayHouseForm = true;
  }

  onSubmitHouse(form: any): void {
    if (this.isHouseEditMode) {
      this.adminService.updateHouse(this.selectedHouse).subscribe(
        (response) => {
          console.log('House updated:', response);
          this.getAllHouses();
          this.displayHouseForm = false;
        },
        (error) => {
          console.error('Error updating house:', error);
          this.errorMessage = error.error.message;
        }
      );
    } else {
      this.adminService.createHouse(this.selectedHouse).subscribe(
        (response) => {
          console.log('House created:', response);
          this.getAllHouses();
          this.displayHouseForm = false;
        },
        (error) => {
          if(error.status === 406){
            console.error('Error updating user:', error);
            this.errorMessage = "Meter Name already created";
          }
        }
      );
    }
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
    console.log('Deleting house with ID:', houseId);
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

getAllCustomers(): void {
  this.adminService.getAllCustomers().subscribe(
    (response) => {
      this.customers = response;
      console.log(this.customers);
    },
    (error) => {
      console.error('Error fetching customers:', error);
    }
  );
}

getAllHousenames() :void{
  this.adminService.getAllHouseNames().subscribe(
    (response) =>{
      this.allHousesnames = response;
      console.log("House Names ", this.allHousesnames);
    },
    (error) =>{
      console.error("Error Fetching House Names: ", error)
    }
  )
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

    console.log(billId)

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


      
      
  updateBill(bill: any) :void{
    console.log('Updating bill:', bill);
    this.selectedBill = { ...bill };
    console.log('Selected Bill:', this.selectedBill);
     this.isBillEditMode = true;
     this.displayBillForm =true;
  }

  onSubmitBill(form: any): void {
    if (this.isBillEditMode) {
      this.adminService.updateBill(this.selectedBill).subscribe(
        (response) => {
          console.log('Bill updated:', response);
          this.getAllBills(); 
          this.displayBillForm = false;
        },
        (error) => {
          this.handleError(error);
        }
      );
    } else {
      this.adminService.createBill(this.selectedBill).subscribe(
        (response) => {
          console.log('Bill created:', response);
          this.getAllBills();
          this.displayBillForm = false;
        },
        (error) => {
          this.handleError(error);
        }
      );
    }
  }
  


  //User EndPoints


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

  updateUser(user: any): void {
    this.selectedUser = { ...user }; // Copy the user data to selectedUser
    this.isUserEditMode = true;
    this.displayUserForm = true;
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
              if(error.status === 406){
                console.error('Error updating user:', error);
                this.errorMessage = "Email already created";
              }
            }
          );
        }
      }

  //Reports
  getAllReport():void{
    this.adminService.getAllReports().subscribe(
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

  private handleError(error: any): void {
    if (error.status === 406) {
      console.error('Error creating/updating bill:', error);
      this.errorMessage = "A bill with these details already exists.";
    } else {
      this.errorMessage = error.error.message || 'An error occurred while processing the bill.';
    }
  }

  calculateTotal(): void {
    if (this.selectedBill.usedUnit) {
      const baseTotal = this.selectedBill.usedUnit * this.ratePerUnit 
      const tax = 0.05; // 5% tax
      this.selectedBill.total = baseTotal * (1 + tax);
    } else {
      this.selectedBill.total = 0;
    }
  }
}
