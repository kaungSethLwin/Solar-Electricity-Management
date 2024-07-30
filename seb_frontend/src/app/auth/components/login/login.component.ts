import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../service/auth/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StorageService } from '../../../service/storage/storage.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router,private snackbar:MatSnackBar) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
        
  
          const user = {
            id: response.userId,
            role: response.role,
            username: response.username,// Ensure this matches the response field name
          };
  
          console.log('User Object:', user); // Debugging step
  
          StorageService.saveUser(user);
          StorageService.saveToken(response.jwt);
  
          console.log('User Role:', StorageService.getUserRole()); // Debugging step
  
          if (StorageService.isAdminLoggin()) {
            console.log('Admin logged in');
            this.router.navigate(['/admin/dashboard']);
          } else if (StorageService.isEmployeeLoggin()) {
            console.log('Employee logged in');
            this.router.navigate(['/employee/dashboard']);
          } else if (StorageService.isCustomerLoggin()) {
            console.log('Customer logged in');
            this.router.navigate(['/customer/dashboard']);
          }
  
          this.snackbar.open("Login Successful", "Close", { duration: 5000 });
        },
        error: (error) => {
          console.error('Login failed:', error);
          this.snackbar.open("Invalid Credentials!", "Close", { duration: 5000 });
        }
      });
    }
  }
  
  
}
