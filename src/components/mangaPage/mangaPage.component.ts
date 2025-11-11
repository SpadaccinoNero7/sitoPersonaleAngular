import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mangaPage',
  imports: [],
  templateUrl: './mangaPage.component.html',
  styleUrl: './mangaPage.component.scss',
})
export class MangaComponent {
  router = inject(Router);

  goRoot(root: string) {
    this.router.navigateByUrl(root);
  }
}
