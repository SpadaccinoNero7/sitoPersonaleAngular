import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homePage',
  imports: [],
  templateUrl: './homePage.component.html',
  styleUrl: './homePage.component.scss',
})
export class HomeComponent {
  router = inject(Router);
}
