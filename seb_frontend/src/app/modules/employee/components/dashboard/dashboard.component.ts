import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService } from '../../../../service/storage/storage.service';
import { Router } from '@angular/router';
import { PrimeNGSharedModule } from './prime-shared.module';
import { CommonModule } from '@angular/common'; 
import { FormsModule, NgForm } from '@angular/forms';
import { Table } from 'primeng/table';
import { MatDialog } from '@angular/material/dialog';
import { ComfirmDialogComponent } from '../../../comfirm-dialog/comfirm-dialog.component';
import { DialogModule } from 'primeng/dialog';
import { Status } from '../../../admin/components/dashboard/BillStatus';
import { EmployeeService } from '../../services/employee.service';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,PrimeNGSharedModule,FormsModule,DialogModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {



  houses: any[] = [];
  house: any;
  bills: any[] = [];
  bill: any;
  reports: any[] = [];
  customers: any[] = [];
  allHousesnames: any[] = [];
  statusOptions: Status[] = []
  report: any;
  showusername: string = '';
  selectedHouse : any = {};
  selectedBill : any ={};

  displayHouses: boolean = true;
  displayBills: boolean = false;
  displayReport: boolean= false;
  displayHouseForm: boolean =false;
  displayBillForm:boolean =false;
  isHouseEditMode: boolean = false;
  isBillEditMode: boolean = false;
  
  searchOwner: any;
  searchStatus: any;
  errorMessage: string | null = null;
  private readonly ratePerUnit = 100;


  @ViewChild('dt2') dt2: Table | undefined;



  
  constructor(private employeeService: EmployeeService, private router: Router,private dialog: MatDialog) { }

  ngOnInit(): void {
    // Initialize data on component load
    this.getAllHouses();
    this.getAllBills();
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
    console.log('Form submitted. Is Edit Mode:', this.isHouseEditMode);
    console.log('Form Data:', this.selectedHouse);
    
    if (this.isHouseEditMode) {
      this.employeeService.updateHouse(this.selectedHouse).subscribe(
        (response) => {
          console.log('House updated:', response);
          this.getAllHouses();
          this.displayHouseForm = false;
          this.selectedHouse = {}; 
          console.log('Form should now be hidden.');
        },
        (error) => {
          console.error('Error updating house:', error);
          this.errorMessage = error.error.message;
        }
      );
    } else {
      this.employeeService.createHouse(this.selectedHouse).subscribe(
        (response) => {
          console.log('House created:', response);
          this.getAllHouses();
          this.displayHouseForm = false;
          this.selectedHouse = {}; 
          console.log('Form should now be hidden.');
        },
        (error) => {
          if (error.status === 406) {
            console.error('Error updating user:', error);
            this.errorMessage = "Meter Name already created";
          }
        }
      );
    }
  }
  

  getAllHouses(): void {
    this.employeeService.getAllHouses().subscribe(
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
            this.employeeService.deleteHouse(houseId).subscribe(
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
  this.employeeService.getAllCustomers().subscribe(
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
  this.employeeService.getAllHouseNames().subscribe(
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
    this.employeeService.getBillById(billId).subscribe(
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
    this.employeeService.getAllBills().subscribe(
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
        this.employeeService.deleteBill(billId).subscribe(
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
      this.employeeService.updateBill(this.selectedBill).subscribe(
        (response) => {
          console.log('Bill updated:', response);
          this.getAllBills(); 
          this.displayBillForm = false;
          this.selectedBill ={};
        },
        (error) => {
          this.handleError(error);
        }
      );
    } else {
      this.employeeService.createBill(this.selectedBill).subscribe(
        (response) => {
          console.log('Bill created:', response);
          this.getAllBills();
          this.displayBillForm = false;
          this.selectedBill = false;
          console.log('Form should now be hidden.');
        },
        (error) => {
          this.handleError(error);
        }
      );
    }
  }
  

  //Reports
  getAllReport():void{
    this.employeeService.getAllReports().subscribe(
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
    this.displayReport = false;
  }

  showBills(): void {
    this.displayHouses = false;
    this.displayBills = true;
    this.displayReport = false;
  }

  showUsers(): void {
    this.displayHouses = false;
    this.displayBills = false;
    this.displayReport = false;
  }  
  showReports(): void {
    this.displayHouses = false;
    this.displayBills = false;
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
