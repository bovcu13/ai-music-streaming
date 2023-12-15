import { Routes } from '@angular/router';
import { HomeComponent } from "./view/container/home/home.component";
import { MusicPlayListComponent } from "./view/container/music-play-list/music-play-list.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'watch/:id', component: MusicPlayListComponent}
];
