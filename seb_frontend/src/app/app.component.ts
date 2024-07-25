import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { StorageService } from './service/storage/storage.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
 isEmployeeLoggedIn : boolean = StorageService.isEmployeeLoggin();
 isAdminLoggedIn : boolean = StorageService.isAdminLoggin();
 isCustomerLoggedIn : boolean = StorageService.isCustomerLoggin();


 constructor(private router: Router){}

 ngOnInit(){
  this.router.events.subscribe(event => {
    this.isEmployeeLoggedIn = StorageService.isEmployeeLoggin();
    this.isAdminLoggedIn = StorageService.isAdminLoggin();
    this.isCustomerLoggedIn = StorageService.isCustomerLoggin();
  })
 }

 logout(){
  StorageService.logout();
  this.router.navigateByUrl("/login");
 }
}
