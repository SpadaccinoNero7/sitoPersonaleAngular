import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animePage',
  imports: [],
  templateUrl: './animePage.component.html',
  styleUrl: './animePage.component.scss',
})
export class AnimeComponent {
  router = inject(Router);

  goRoot(root: string) {
    this.router.navigateByUrl(root);
  }
}
