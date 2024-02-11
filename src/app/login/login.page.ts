import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  public passwordType: string;
  public username: string = '';
  public password: string = '';
  private loginUrl = 'https://staging.rrdevours.monster/api/login';

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    const user = localStorage.getItem('user');
    if (user) {
      this.router.navigate(['/iconList']);
    }
  }

  togglePasswordType() {
    this.passwordType = this.passwordType || 'password';
    this.passwordType = (this.passwordType === 'password') ? 'text' : 'password';
  }

  login() {
    if (this.username.trim() && this.password.trim()) {
      const userData = {
        email: this.username, 
        password: this.password
      };

      this.http.post(this.loginUrl, { email: this.username, password: this.password }).subscribe(
        success => {
          localStorage.setItem('user', JSON.stringify(success));
          // Navigate to basicList after successful login
          this.router.navigate(['/iconList']);
        },
        error => {
        /*  // Handle successful login
          localStorage.setItem('user', JSON.stringify(success));
          console.log("User in check the charts bro: ");
          console.log(success);
          console.log("How does it feel?");
          const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
          console.log("Stored User ID from Local Storage:", storedUser.id); // Log the stored user ID
          console.log("Do you see the user id?");
          this.router.navigate(['/basicList']);
        },
        error => { */
          // Handle login error
          // For example, show an alert or a message to the user
        }
      );
    } else {
      // Optionally handle the case where username or password is empty
      // For example, show an alert or a message to the user
    }
  }

  

}
