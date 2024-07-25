import { Component } from '@angular/core';
import { StorageService } from '../../../../service/storage/storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
username: string | undefined;
  constructor(private router: Router){}

  ngOnInit(): void {
    this.username = this.showUserName();  
  }

  showUserName(): string {
    return StorageService.getUsername(); 
  }



  logout(){
    StorageService.logout();
    this.router.navigateByUrl("/login");
   }

}
