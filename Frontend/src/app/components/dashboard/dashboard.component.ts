import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { ViewResultsComponent } from '../view-results/view-results.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isLoggedIn = false;
  username?: string;
  email?: string;
  currentUser: any;
  
  constructor(private tokenStorageService: TokenStorageService  ) { }
 
  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser()
    console.log(this.currentUser)
  }

  @ViewChild(ViewResultsComponent) childComponent!: ViewResultsComponent;

  ngAfterViewInit(): void {

    if (this.childComponent) {
      this.childComponent.ViewProd();
    }
  }

  select(){
    this.childComponent.ViewProd();
  }



}
