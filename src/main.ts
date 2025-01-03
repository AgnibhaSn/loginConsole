import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { SignupComponent } from './app/signup/signup.component'; // Import your components
import { LoginComponent } from './app/login/login.component';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';

// Define routes
const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' }, // Default route
  { path: 'signup', component: SignupComponent },         // Route to SignupComponent
  { path: 'login', component: LoginComponent }        // Route to AnotherComponent
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
// Bootstrap the application
// bootstrapApplication(AppComponent, {
//   providers: [
//     provideRouter(routes) // Provide routes here
//   ]
// }).catch(err => console.error(err));
