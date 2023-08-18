import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

import { UserauthService } from 'src/app/services/userauth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  firstName!: string;
  lastName!: string;
  email!: string;
  // password: null,
  // confirmPassword: null
  phoneNo!: string;
  gender!: string;
  maritalStatus!: string;
  dob!: string;
  dependents!: string;
  occupation!: string;

  form: any = {
    firstName: null,
    lastName: null,
    email: null,
    // password: null,
    // confirmPassword: null
    phoneNo: null,
    gender: null,
    maritalStatus: null,
    dob: null,
    dependents: null,
    occupation: null

  };

  isLoggedIn = false;
  username?: string;
  // email?: string;
  currentUser: any;

  constructor( private userauth: UserauthService, private tokenStorageService: TokenStorageService ) { }
  ngOnInit(): void {
    this.fetchUserProfile();
    this.currentUser = this.tokenStorageService.getUser()
    console.log(this.currentUser)
  }

    fetchUserProfile(): void {
      // Assuming you have a method getAll in your UserauthService to fetch user profile
      this.userauth.getUsers().subscribe(
        (response: any) => {
          // Assuming response contains user profile details
          this.form = response;
          console.log(response);
          
        },
        (error: any) => {
          console.error('Error fetching user profile:', error);
        }
      );
    }

    updateProfile(): void {
      // Assuming you have a method in UserauthService to update user profile data
      this.userauth.profile(this.firstName, this.lastName, this.dob, this.email, this.gender, this.occupation, this.dependents, this.maritalStatus, this.phoneNo).subscribe(
        (response: any) => {
          console.log('Profile updated successfully:', response);
        },
        (error: any) => {
          console.error('Error updating profile:', error);
        }
      );
    }

 
}


