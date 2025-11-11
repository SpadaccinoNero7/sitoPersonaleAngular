import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-logs',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.scss',
})
export class LogsComponent {
  router = inject(Router);

  goToRoot(root: string) {
    this.router.navigateByUrl(root);
  }
}
