import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-homePage',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './homePage.component.html',
  styleUrl: './homePage.component.scss',
})
export class HomeComponent {
  router = inject(Router);

  goToUserList() {
    this.router.navigateByUrl('userList');
  }
}
