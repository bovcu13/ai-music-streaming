import { Component, OnDestroy } from '@angular/core';
import { PRIMENG_MODULES } from "../../../share/primeng";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    PRIMENG_MODULES,
    FormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnDestroy {
  deafultPage: boolean = true;
  createPassword: boolean = false;
  createProfile: boolean = false;
  tcPage: boolean = false;
  gender: string = ''
  marketing_preferences: boolean = false;
  data_sharing_consent: boolean = false;

  progressValue: number = 0;
  intervalId?: number;

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startProgressBar() {
    if (this.progressValue === 0) {
      this.intervalId = window.setTimeout(() => {
        this.progressValue = 33;
      }, 100);
    } else if (this.progressValue === 33) {
      this.intervalId = window.setTimeout(() => {
        this.progressValue = 66;
      }, 100);
    } else if (this.progressValue === 66) {
      this.intervalId = window.setTimeout(() => {
        this.progressValue = 100;
      }, 100);
    }
  }

  backProgressBar() {
    if (this.progressValue === 100) {
      this.intervalId = window.setTimeout(() => {
        this.progressValue = 66;
      }, 100);
    } else if (this.progressValue === 66) {
      this.intervalId = window.setTimeout(() => {
        this.progressValue = 33;
      }, 100);
    } else if (this.progressValue === 33) {
      this.intervalId = window.setTimeout(() => {
        this.progressValue = 0;
      }, 100);
    }
  }
}
