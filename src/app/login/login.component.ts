import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = { username: '', password: '' };

  login() {
    // Implement authentication logic here
    // For example, check if username and password are valid
    if (this.user.username === 'yourUsername' && this.user.password === 'yourPassword') {
      // Successful login, you can navigate to another component or perform other actions
      console.log('Login successful');
    } else {
      // Invalid login, show an error message
      console.error('Invalid credentials');
    }
  }
}
