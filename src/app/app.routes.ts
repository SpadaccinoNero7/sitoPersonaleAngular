import { Routes } from '@angular/router';
import { HomeComponent } from '../components/homePage/homePage.component';
import { UserListComponent } from '../components/userList/userList.component';
import { LogsComponent } from '../components/logs/logs.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'userList', component: UserListComponent },
  { path: 'logs', component: LogsComponent },
];
