import { Component, ViewChild } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Table } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { PrimeNGSharedModule } from './primeng-shared.module';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

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

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.fetchBills();
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
}
