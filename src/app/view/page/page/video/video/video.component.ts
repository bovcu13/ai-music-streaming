import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import VePlayer from '@byteplus/veplayer';



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
      enableContextmenu: true,
      lang: 'zh',
        id: 'mse',
        width: 600,
        height: 400,

        url: "https://vod.testing.lovfi.com/b4701150c156b10e833c31ea3a8e60a0/65a1086f/video/tos/sgcomm1/tos-sgcomm1-v-95651d8bdd5bef12-sg/oc8Jhzh8TtIgAAo7Xyj5MvwIXyQNyg4lIfqWUF/?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=70e45644eb3a49eaa38aefc9ba5a2d3b%2F20240112%2F%2F%2Faws4_request&X-Amz-Date=20240112T083751Z&X-Amz-Expires=4200&X-Amz-Signature=37f611709492941abcfd8613d84b04f9f710a4caa8f13ebe96c8431354259ae2&X-Amz-SignedHeaders=host&X-Amz-SignedQueries=X-Amz-Algorithm%3BX-Amz-Credential%3BX-Amz-Date%3BX-Amz-Expires%3BX-Amz-SignedHeaders%3BX-Amz-SignedQueries%3BX-Amz-UriRange%3Bsgw-endpoint&X-Amz-UriRange=0%2C+92&sgw-endpoint=vod.testing.lovfi.com",
        // getVideoByToken: {

        //   playAuthToken: 'eyJHZXRQbGF5SW5mb1Rva2VuIjoiQWN0aW9uPUdldFBsYXlJbmZvXHUwMDI2Q2RuVHlwZT0wXHUwMDI2RGVmaW5pdGlvbj03MjBwXHUwMDI2RmlsZVR5cGU9dmlkZW9cdTAwMjZGb3JtYXQ9bXA0XHUwMDI2TG9nb1R5cGU9bm90Y29weVx1MDAyNk5lZWRCYXJyYWdlTWFzaz0wXHUwMDI2TmVlZFRodW1icz0wXHUwMDI2U3NsPTFcdTAwMjZWZXJzaW9uPTIwMjMtMDEtMDFcdTAwMjZWaWQ9djExMTI2ZzUwMDAwY21iMm1qc21hYmRoa3M1ZTcxNmdcdTAwMjZYLUFsZ29yaXRobT1ITUFDLVNIQTI1Nlx1MDAyNlgtQ3JlZGVudGlhbD1BS0FQTUdVek0yVTVNMkU0T0dZd05HSXlPR0pqTVdNeU1HUXhOV0l3WmpVNE9XTSUyRjIwMjQwMTEwJTJGYXAtc2luZ2Fwb3JlLTElMkZ2b2QlMkZyZXF1ZXN0XHUwMDI2WC1EYXRlPTIwMjQwMTEwVDA4NTYyNVpcdTAwMjZYLUV4cGlyZXM9NjAwMFx1MDAyNlgtTm90U2lnbkJvZHk9XHUwMDI2WC1TaWduYXR1cmU9YzMyNjM3NmQ2NTk0ZGZkZjUxMjI0ODJjOWNlYjM3Mzg0ZGE3ODY3YzM4ZTA1ZGNjYmRjM2I5NTM1OGEyZWEzM1x1MDAyNlgtU2lnbmVkSGVhZGVycz1cdTAwMjZYLVNpZ25lZFF1ZXJpZXM9QWN0aW9uJTNCQ2RuVHlwZSUzQkRlZmluaXRpb24lM0JGaWxlVHlwZSUzQkZvcm1hdCUzQkxvZ29UeXBlJTNCTmVlZEJhcnJhZ2VNYXNrJTNCTmVlZFRodW1icyUzQlNzbCUzQlZlcnNpb24lM0JWaWQlM0JYLUFsZ29yaXRobSUzQlgtQ3JlZGVudGlhbCUzQlgtRGF0ZSUzQlgtRXhwaXJlcyUzQlgtTm90U2lnbkJvZHklM0JYLVNpZ25lZEhlYWRlcnMlM0JYLVNpZ25lZFF1ZXJpZXMiLCJUb2tlblZlcnNpb24iOiJWMiJ9',
        // },
        vodLogOpts: {
          line_app_id: 562771,
          tag: 'normal'
        }
      });
  }


}
