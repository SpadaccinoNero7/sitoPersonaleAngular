import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userList',
  imports: [],
  templateUrl: './userList.component.html',
  styleUrl: './userList.component.scss',
})
export class UserListComponent {
  router = inject(Router);

  goToHomePage() {
    this.router.navigateByUrl('');
  }
}
