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
      enableContextmenu: false,
      lang: 'zh',
        id: 'mse',
        width: 600,
        height: 400,
        Subtitle: {

          enable: true,
          font: 'Arial',
          fontSize: 24,
          fontColor: '#FFFFFF',
          backgroundColor: '#000000',
          backgroundOpacity: 0.5,
          bottom: 10,
          left: 10,
          right: 10,
          text: 'Subtitle',
          textAlign: 'left',
          textOpacity: 1,
          top: 10,
          zIndex: 100,


        },

        url: "https://vod.testing.lovfi.com/6a20199006d9f842a10cdcf171492a49/65a10b0f/video/tos/sgcomm1/tos-sgcomm1-v-95651d8bdd5bef12-sg/oc8Jhzh8TtIgAAo7Xyj5MvwIXyQNyg4lIfqWUF/?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=70e45644eb3a49eaa38aefc9ba5a2d3b%2F20240112%2F%2F%2Faws4_request&X-Amz-Date=20240112T084903Z&X-Amz-Expires=4200&X-Amz-Signature=3170135cc63c3ea74d0da4c10f5261961610b11ead9fcbbed8d358a3f6836256&X-Amz-SignedHeaders=host&X-Amz-SignedQueries=X-Amz-Algorithm%3BX-Amz-Credential%3BX-Amz-Date%3BX-Amz-Expires%3BX-Amz-SignedHeaders%3BX-Amz-SignedQueries%3BX-Amz-UriRange%3Bsgw-endpoint&X-Amz-UriRange=0%2C+92&sgw-endpoint=vod.testing.lovfi.com",
        // getVideoByToken: {

        //   playAuthToken: 'eyJHZXRQbGF5SW5mb1Rva2VuIjoiQWN0aW9uPUdldFBsYXlJbmZvXHUwMDI2Q2RuVHlwZT0wXHUwMDI2RGVmaW5pdGlvbj03MjBwXHUwMDI2RmlsZVR5cGU9dmlkZW9cdTAwMjZGb3JtYXQ9bXA0XHUwMDI2TG9nb1R5cGU9bm90Y29weVx1MDAyNk5lZWRCYXJyYWdlTWFzaz0wXHUwMDI2TmVlZFRodW1icz0wXHUwMDI2U3NsPTFcdTAwMjZWZXJzaW9uPTIwMjMtMDEtMDFcdTAwMjZWaWQ9djExMTI2ZzUwMDAwY21mb25zc21hYmRoa3M1ZThzODBcdTAwMjZYLUFsZ29yaXRobT1ITUFDLVNIQTI1Nlx1MDAyNlgtQ3JlZGVudGlhbD1BS0FQTUdVek0yVTVNMkU0T0dZd05HSXlPR0pqTVdNeU1HUXhOV0l3WmpVNE9XTSUyRjIwMjQwMTEyJTJGYXAtc2luZ2Fwb3JlLTElMkZ2b2QlMkZyZXF1ZXN0XHUwMDI2WC1EYXRlPTIwMjQwMTEyVDA5MDEyNlpcdTAwMjZYLUV4cGlyZXM9NjAwMFx1MDAyNlgtTm90U2lnbkJvZHk9XHUwMDI2WC1TaWduYXR1cmU9Yzk0ODMyMDcxMTExYTA4MjYyZTlhMDBiNjI5Njg2MDllZmFhNzYwYzc1MjYzODgwYmJkNWVhZTE2NTFhMTY5MFx1MDAyNlgtU2lnbmVkSGVhZGVycz1cdTAwMjZYLVNpZ25lZFF1ZXJpZXM9QWN0aW9uJTNCQ2RuVHlwZSUzQkRlZmluaXRpb24lM0JGaWxlVHlwZSUzQkZvcm1hdCUzQkxvZ29UeXBlJTNCTmVlZEJhcnJhZ2VNYXNrJTNCTmVlZFRodW1icyUzQlNzbCUzQlZlcnNpb24lM0JWaWQlM0JYLUFsZ29yaXRobSUzQlgtQ3JlZGVudGlhbCUzQlgtRGF0ZSUzQlgtRXhwaXJlcyUzQlgtTm90U2lnbkJvZHklM0JYLVNpZ25lZEhlYWRlcnMlM0JYLVNpZ25lZFF1ZXJpZXMiLCJUb2tlblZlcnNpb24iOiJWMiJ9',
        // },
        vodLogOpts: {
          line_app_id: 562771,
          tag: 'normal'
        }
      });
  }


}
