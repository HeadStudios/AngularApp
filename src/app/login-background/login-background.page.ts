import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-background',
  templateUrl: './login-background.page.html',
  styleUrls: ['./login-background.page.scss'],
})
export class LoginBackgroundPage implements OnInit {

  public passwordType: string;

  constructor() { }

  ngOnInit() {
  }

  togglePasswordType() {
    this.passwordType = this.passwordType || 'password';
    this.passwordType = (this.passwordType === 'password') ? 'text' : 'password';
  }

}
