import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // CSS file linked here
})
export class AppComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  onSubmit() {
    
      console.log('Form Submitted', {
        name: this.name,
        email: this.email,
        password: this.password,
    
    });

    }
  }
