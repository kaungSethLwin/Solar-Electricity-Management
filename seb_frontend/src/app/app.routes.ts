import { Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';

export const routes: Routes = [
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{path:"login",component:LoginComponent},
{path:"admin", loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)},
{path:"employee", loadChildren: () => import('./modules/employee/employee.module').then(m => m.EmployeeModule)},
{path:"customer", loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule)},

];
