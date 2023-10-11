import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../style.css']
})

export class AppComponent {
  title = "PasswordProject";
  password: string = '';
  isWeak: boolean = false;
  isMedium: boolean = false;
  isStrong: boolean = false;
  isAny: boolean = true;

  checkPassword() {
    if (!this.password) {
      this.isAny = true;
      this.isWeak = false;
      this.isMedium = false;
      this.isStrong = false;
    } else if (this.password.length < 8) {
      this.isAny = false;
      this.isWeak = true;
      this.isMedium = false;
      this.isStrong = false;
    } else if (/^[a-zA-Z0-9]+$/.test(this.password)) {
      this.isAny = false;
      this.isWeak = false;
      this.isMedium = true;
      this.isStrong = false;
    } else {
      this.isAny = false;
      this.isWeak = false;
      this.isMedium = false;
      this.isStrong = true;
    }
  }
}