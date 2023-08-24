import { Component, OnInit } from '@angular/core';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserauthService } from 'src/app/services/userauth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: any = {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    confirmPassword: null,
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private userauth: UserauthService,
    private tokenStorage: TokenStorageService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isSuccessful = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { firstName, lastName, email, password, confirmPassword } = this.form;
    //This Method That Returns An Observable Object (authService.register())
    this.userauth
      .register(firstName, lastName, email, password, confirmPassword)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);
          this.roles = this.tokenStorage.getUser().roles;
          const snackBarRef = this._snackBar.open('Sign up successful!', 'OK', {
            verticalPosition: 'bottom',
            panelClass: 'success-snackbar', 
            duration: 0 
          });

          // Listen for action
          snackBarRef.onAction().subscribe(() => {
            window.location.replace('/welcome');
          });

          window.location.replace('/welcome');
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
          this._snackBar.open('Sign up failed. Please try again.', 'Dismiss', {
            horizontalPosition: 'center', // Set the horizontal position to center
            verticalPosition: 'bottom', // Positioning
            panelClass: 'error-snackbar', // Add custom CSS class for styling
            duration: 5000 // Duration in milliseconds
          });
          console.log(this.errorMessage)
          // window.location.reload()
          
        },

      });


      
  }

  reloadPage(): void {
    window.location.reload();
  }

}
