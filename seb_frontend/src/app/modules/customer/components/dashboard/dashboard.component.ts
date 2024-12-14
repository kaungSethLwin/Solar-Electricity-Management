import { Component, ViewChild } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Table } from 'primeng/table';
import { CommonModule, formatDate } from '@angular/common';
import { PrimeNGSharedModule } from './primeng-shared.module';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { StorageService } from '../../../../service/storage/storage.service';
import { Router } from '@angular/router';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';




@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,PrimeNGSharedModule,FormsModule,DialogModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  @ViewChild('dt2') dt2: Table | undefined;

  bills: any[] = [];
  displayBills: boolean = true;
  showusername: string = "";
  currentDate: string = '';
  showPopup: boolean = false;
  selectedBill: any = {};
  billMonthTitle: string = '';


  constructor(private customerService: CustomerService, private router: Router) {}

  ngOnInit() {
    this.fetchBills();
    this.showusername = this.showUserName(); 
  }

  showUserName(): string {
    return StorageService.getUsername(); 
    
  }

  fetchBills() {
    this.customerService.getAllUnpaidBills().subscribe(
      data => {
        this.bills = data;
      },
      error => {
        console.error('Error fetching bills', error);
      }
    );
  }

  onGlobalFilter(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    if (this.dt2) {
      this.dt2.filterGlobal(value, 'contains');
    }
  }


  logout(){
    StorageService.logout();
    this.router.navigateByUrl("/login");
   }

   showBillPopup(bill :any) {

    this.currentDate = formatDate(new Date(), 'MMMM d, yyyy', 'en-US');
    this.selectedBill = bill; 


    const billDate = new Date(bill.billDate);
    const previousMonthName = this.getPreviousMonth(billDate);
    
    // Set the bill month title dynamically
    this.billMonthTitle = ` Monthly Payment Bill For ${previousMonthName} ${billDate.getFullYear()}`;
  
      this.showPopup = true;
      //this.showPopup = false;

    
  }

  closePopup() {
    this.showPopup = false;
  }


  printBill() {
    const popupContent = document.querySelector('#popupContent') as HTMLElement;
  
    html2canvas(popupContent, { useCORS: true }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('bill.pdf');
    });
  }

  getPreviousMonth(date: Date): string {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const previousMonthIndex = date.getMonth() - 1;
    return monthNames[previousMonthIndex >= 0 ? previousMonthIndex : 11]; // handle December to January transition
  }
  
}
