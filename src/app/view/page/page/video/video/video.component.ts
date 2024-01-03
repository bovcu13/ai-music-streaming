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
      lang: 'en',
        id: 'mse',
        width: 600,
        height: 400,
        getVideoByToken: {
          playAuthToken: 'eyJHZXRQbGF5SW5mb1Rva2VuIjoiQWN0aW9uPUdldFBsYXlJbmZvXHUwMDI2Rm9ybWF0PW1wNFx1MDAyNlNzbD0xXHUwMDI2VmVyc2lvbj0yMDIzLTAxLTAxXHUwMDI2VmlkPXYxMTA4OWc1MDAwMGNnaHJscWttYWJkaGtzNWNzaXAwXHUwMDI2WC1BbGdvcml0aG09SE1BQy1TSEEyNTZcdTAwMjZYLUNyZWRlbnRpYWw9QUtBUFlqUXdOR0UwWXpFek1HUmtORE5rWWprMVlUUmlNVEl6WlRNNU56RmtZemMlMkYyMDIzMDMyOSUyRmFwLXNpbmdhcG9yZS0xJTJGdm9kJTJGcmVxdWVzdFx1MDAyNlgtRGF0ZT0yMDIzMDMyOVQwNzQ0MDdaXHUwMDI2WC1FeHBpcmVzPTMwNzU4NDAwXHUwMDI2WC1Ob3RTaWduQm9keT1cdTAwMjZYLVNpZ25hdHVyZT1kYTcxZGJlN2ZkYWE3Y2E4NDYzMDIzNDAyNTE4MWYyOTk5Y2FlYmJiMGY4Y2JkODE4OTQ1MjkxMDRhYTAyN2U3XHUwMDI2WC1TaWduZWRIZWFkZXJzPVx1MDAyNlgtU2lnbmVkUXVlcmllcz1BY3Rpb24lM0JGb3JtYXQlM0JTc2wlM0JWZXJzaW9uJTNCVmlkJTNCWC1BbGdvcml0aG0lM0JYLUNyZWRlbnRpYWwlM0JYLURhdGUlM0JYLUV4cGlyZXMlM0JYLU5vdFNpZ25Cb2R5JTNCWC1TaWduZWRIZWFkZXJzJTNCWC1TaWduZWRRdWVyaWVzIiwiVG9rZW5WZXJzaW9uIjoiVjIifQ==',
        },
        vodLogOpts: {
          line_app_id: 562771,
          tag: 'normal'
        }
      });
  }


}
