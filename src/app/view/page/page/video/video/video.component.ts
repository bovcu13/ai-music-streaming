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

          playAuthToken: 'eyJHZXRQbGF5SW5mb1Rva2VuIjoiQWN0aW9uPUdldFBsYXlJbmZvXHUwMDI2Q2RuVHlwZT0wXHUwMDI2RGVmaW5pdGlvbj03MjBwXHUwMDI2RmlsZVR5cGU9dmlkZW9cdTAwMjZGb3JtYXQ9bXA0XHUwMDI2TmVlZEJhcnJhZ2VNYXNrPTBcdTAwMjZOZWVkVGh1bWJzPTBcdTAwMjZTc2w9MVx1MDAyNlZlcnNpb249MjAyMy0wMS0wMVx1MDAyNlZpZD12MTExMjZnNTAwMDBjbWIybWpzbWFiZGhrczVlNzE2Z1x1MDAyNlgtQWxnb3JpdGhtPUhNQUMtU0hBMjU2XHUwMDI2WC1DcmVkZW50aWFsPUFLQVBNR1V6TTJVNU0yRTRPR1l3TkdJeU9HSmpNV015TUdReE5XSXdaalU0T1dNJTJGMjAyNDAxMDglMkZhcC1zaW5nYXBvcmUtMSUyRnZvZCUyRnJlcXVlc3RcdTAwMjZYLURhdGU9MjAyNDAxMDhUMDkwMTUxWlx1MDAyNlgtRXhwaXJlcz02MDBcdTAwMjZYLU5vdFNpZ25Cb2R5PVx1MDAyNlgtU2lnbmF0dXJlPTBkOWViOTg0NjE2NmQ5OWRhMTBlY2EwNGVjMWRhYzZmMTEyNmJmMjgwYmRkMzRkMDRhZmUxMThhOTZjN2NhNjRcdTAwMjZYLVNpZ25lZEhlYWRlcnM9XHUwMDI2WC1TaWduZWRRdWVyaWVzPUFjdGlvbiUzQkNkblR5cGUlM0JEZWZpbml0aW9uJTNCRmlsZVR5cGUlM0JGb3JtYXQlM0JOZWVkQmFycmFnZU1hc2slM0JOZWVkVGh1bWJzJTNCU3NsJTNCVmVyc2lvbiUzQlZpZCUzQlgtQWxnb3JpdGhtJTNCWC1DcmVkZW50aWFsJTNCWC1EYXRlJTNCWC1FeHBpcmVzJTNCWC1Ob3RTaWduQm9keSUzQlgtU2lnbmVkSGVhZGVycyUzQlgtU2lnbmVkUXVlcmllcyIsIlRva2VuVmVyc2lvbiI6IlYyIn0=',
        },
        vodLogOpts: {
          line_app_id: 562771,
          tag: 'normal'
        }
      });
  }


}
