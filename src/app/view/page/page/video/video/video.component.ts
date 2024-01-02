import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import VePlayer from '@byteplus/veplayer';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>video works!</p>`,
  styleUrl: './video.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoComponent {
   playerSdk = new VePlayer({
    id: 'mse',
    width: 800,
    height: 500,
    getVideoByToken: {
      playAuthToken: 'playAuthToken',
      definitionMap: {
        'original': {
          definition: 'ori',
          definitionTextKey: 'ORI'
        },
        '360p': {
          definition: 'ld',
          definitionTextKey: 'LD'
        },
        '480p': {
          definition: 'hd',
          definitionTextKey: 'HD'
        },
        '720p': {
          definition: 'uhd',
          definitionTextKey: 'UHD'
        }
      }
    },
    languages: {
      'en': {
        ORI: 'Original',
        LD: 'LD',
        HD: 'HD',
        UHD: 'UHD'
      }
    }
  });

}
