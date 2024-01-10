import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import VePlayer from '@byteplus/veplayer';
// veplayer css
import '@byteplus/veplayer/index.min.css';


@Component({
  selector: 'app-video',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './video.compent.html',
  styleUrl: './video.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const playerSdk = new VePlayer({
      enableContextmenu: false,
      lang: 'en',
        id: 'mse',
        width: 600,
        height: 400,
        getVideoByToken: {

          playAuthToken: 'eyJHZXRQbGF5SW5mb1Rva2VuIjoiQWN0aW9uPUdldFBsYXlJbmZvXHUwMDI2Q2RuVHlwZT0wXHUwMDI2RGVmaW5pdGlvbj03MjBwXHUwMDI2RmlsZVR5cGU9dmlkZW9cdTAwMjZGb3JtYXQ9bXA0XHUwMDI2TG9nb1R5cGU9bm90Y29weVx1MDAyNk5lZWRCYXJyYWdlTWFzaz0wXHUwMDI2TmVlZFRodW1icz0wXHUwMDI2U3NsPTFcdTAwMjZWZXJzaW9uPTIwMjMtMDEtMDFcdTAwMjZWaWQ9djExMTI2ZzUwMDAwY21iMm1qc21hYmRoa3M1ZTcxNmdcdTAwMjZYLUFsZ29yaXRobT1ITUFDLVNIQTI1Nlx1MDAyNlgtQ3JlZGVudGlhbD1BS0FQTUdVek0yVTVNMkU0T0dZd05HSXlPR0pqTVdNeU1HUXhOV0l3WmpVNE9XTSUyRjIwMjQwMTEwJTJGYXAtc2luZ2Fwb3JlLTElMkZ2b2QlMkZyZXF1ZXN0XHUwMDI2WC1EYXRlPTIwMjQwMTEwVDA4NTYyNVpcdTAwMjZYLUV4cGlyZXM9NjAwMFx1MDAyNlgtTm90U2lnbkJvZHk9XHUwMDI2WC1TaWduYXR1cmU9YzMyNjM3NmQ2NTk0ZGZkZjUxMjI0ODJjOWNlYjM3Mzg0ZGE3ODY3YzM4ZTA1ZGNjYmRjM2I5NTM1OGEyZWEzM1x1MDAyNlgtU2lnbmVkSGVhZGVycz1cdTAwMjZYLVNpZ25lZFF1ZXJpZXM9QWN0aW9uJTNCQ2RuVHlwZSUzQkRlZmluaXRpb24lM0JGaWxlVHlwZSUzQkZvcm1hdCUzQkxvZ29UeXBlJTNCTmVlZEJhcnJhZ2VNYXNrJTNCTmVlZFRodW1icyUzQlNzbCUzQlZlcnNpb24lM0JWaWQlM0JYLUFsZ29yaXRobSUzQlgtQ3JlZGVudGlhbCUzQlgtRGF0ZSUzQlgtRXhwaXJlcyUzQlgtTm90U2lnbkJvZHklM0JYLVNpZ25lZEhlYWRlcnMlM0JYLVNpZ25lZFF1ZXJpZXMiLCJUb2tlblZlcnNpb24iOiJWMiJ9',
        },
        vodLogOpts: {
          line_app_id: 562771,
          tag: 'normal'
        }
      });
  }


}
