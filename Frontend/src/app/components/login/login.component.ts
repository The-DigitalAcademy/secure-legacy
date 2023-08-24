import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserauthService } from 'src/app/services/userauth.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(public tokenstorage: TokenStorageService, private userauth: UserauthService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if (this.tokenstorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenstorage.getUser().roles;
    }
  }
  onSubmit(): void {
    const { email, password } = this.form;

    this.userauth.login(email, password).subscribe({
      
      next: (data) => {
        this.tokenstorage.saveToken(data.accessToken);
        this.tokenstorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenstorage.getUser().roles;
        const accessToken = data.accessToken
        this.userauth.storeAccessToken(accessToken)
        // this.reloadPage();
        const snackBarRef = this._snackBar.open('Login successful!', 'OK', {
          verticalPosition: 'bottom',
          panelClass: 'success-snackbar', 
          duration: 0 
        });

        // Listen for action
        snackBarRef.onAction().subscribe(() => {
          window.location.replace("/dashboard")
        });
        window.location.replace("/dashboard")
      //return this.isLoggedIn = true
      
        
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        const snackBarReffail = this._snackBar.open('Login failed. Please try again.', 'Dismiss', {
          horizontalPosition: 'center', // Set the horizontal position to center
          verticalPosition: 'bottom', // Positioning
          panelClass: 'error-snackbar', // Add custom CSS class for styling
          duration: 5000 // Duration in milliseconds
        });

        snackBarReffail.onAction().subscribe(() => {
          this.reloadPage()
        });

        setTimeout(() => {
          if (this.isLoginFailed) {
            this.reloadPage()
          }
        }, 1500);
      },
      
   });
  }

  reloadPage(): void {
    window.location.reload();
  }

  
}
