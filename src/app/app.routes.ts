import { Routes } from '@angular/router';
import { HomeComponent } from '../components/homePage/homePage.component';
import { UserListComponent } from '../components/userList/userList.component';
import { LogsComponent } from '../components/logs/logs.component';
import { AnimeComponent } from '../components/animePage/animePage.component';
import { MangaComponent } from '../components/mangaPage/mangaPage.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'userList', component: UserListComponent },
  { path: 'logs', component: LogsComponent },
  { path: 'anime', component: AnimeComponent },
  { path: 'manga', component: MangaComponent },
];
