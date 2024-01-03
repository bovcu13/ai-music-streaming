import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { MusicPlayListComponent } from "./music-play-list/music-play-list.component";
import { ContainerComponent } from "./container.component";
import { VideoComponent } from '../page/page/video/video/video.component';

export const routes: Routes = [
  {
    path: '', component: ContainerComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'watch/:id', component: MusicPlayListComponent },
      { path: 'video', component: VideoComponent },
    ]
  },
];
