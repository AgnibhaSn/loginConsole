import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-login-component.component.html',
  styleUrls: ['./user-login-component.component.css'] // CSS file linked here
})
export class AppComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  onSubmit() {
    
      console.log('Form Submitted', {
        username: this.username,
        email: this.email,
        password: this.password,
    
    });

    }
  }
