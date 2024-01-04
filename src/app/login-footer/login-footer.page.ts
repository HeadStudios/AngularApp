import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-footer',
  templateUrl: './login-footer.page.html',
  styleUrls: ['./login-footer.page.scss'],
})
export class LoginFooterPage implements OnInit {

  public passwordType: string;

  constructor() { }

  ngOnInit() {
  }

  togglePasswordType() {
    this.passwordType = this.passwordType || 'password';
    this.passwordType = (this.passwordType === 'password') ? 'text' : 'password';
  }

}
