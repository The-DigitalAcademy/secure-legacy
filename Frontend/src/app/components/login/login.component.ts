import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserauthService } from 'src/app/services/userauth.service';


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

  constructor(public tokenstorage: TokenStorageService, private userauth: UserauthService) { }

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
        //alert("Login Successful")
        this.reloadPage();
        //this.toastr.success("Login Successful")
        
       window.location.replace("/dashboard")
      //return this.isLoggedIn = true
      
        
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        //this.toastr.error("Login Failed, Try Again")
      },
      
   });
  }

  reloadPage(): void {
    window.location.reload();
  }

}
