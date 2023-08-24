import { Component, OnInit,  ViewChild } from '@angular/core';
import { GptService } from 'src/app/services/gpt.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper'; 
@Component({
  selector: 'app-view-results',
  templateUrl: './view-results.component.html',
  styleUrls: ['./view-results.component.scss']
})
export class ViewResultsComponent implements OnInit {

  sixthFormGroup = this._formBuilder.group({
    // sixthCtrl: ['', Validators.required],
  });
  view = true;
  isLinear = true;
  hidden = true;
  select = false;
  chosenProd: any;
  redirectURL: any
  currentUser: any;
  recommendations: any[] = [];
  myCurrentAnswers = {}
  loading = false;
  selectedProduct: any; 
  loadingTimeout = false; 
  userAnswers = {
    has_dependents: false,
    planning_for_child_education: false,
    physically_demanding_job: false,
    specific_financial_goals: false,
    retirement_plan_with_tax_benefits: false
  };

  @ViewChild('stepper') stepper!: MatStepper;
  constructor(private gptservice: GptService, private tokenStorageService: TokenStorageService, private _formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser()
    console.log(this.currentUser)
    this.loadUserAnswers()
    this.ViewProd()
  }

  loadUserAnswers() {
    if (this.currentUser) {
      const userAnswersKey = `user_answers_${this.currentUser.id}`;
      const savedAnswers = localStorage.getItem(userAnswersKey);
      if (savedAnswers) {
        this.userAnswers = JSON.parse(savedAnswers);
        console.log('Loaded user answers (session):', this.userAnswers);
      }
    }
  }

  ViewProd() {
    this.loading = true;

    setTimeout(() => {
      if (this.loading) {
        this.loadingTimeout = true; // Loading took too long
        window.location.replace('/dashboard')
      }
    }, 60000);
  

   this.myCurrentAnswers = this.userAnswers
  
    this.gptservice.getRecommendations(this.myCurrentAnswers).subscribe(
      (data) => {
        this.recommendations = data.recommendedProducts;
        console.log(this.recommendations);
        console.log('this is returning something');
        console.log(this.myCurrentAnswers);
        this.loading = false;
        this.loadingTimeout = false;

        // Testing This If All User Answers Are False
        if (
          !this.userAnswers.has_dependents &&
          !this.userAnswers.planning_for_child_education &&
          !this.userAnswers.physically_demanding_job &&
          !this.userAnswers.specific_financial_goals &&
          !this.userAnswers.retirement_plan_with_tax_benefits
        ) {
          this.view = false; // Set view to false
        }

        
      },
      (error) => {
        console.error('Error fetching recommendations:', error);
        this.loading = false;
        this.loadingTimeout = false;
      }
    )

}

selectProduct(product: any) {
  this.selectedProduct = product;
  
  // this.getMeaningOfWord()
  console.log("this is me selecting: " + this.selectedProduct.title) //This Displays The Selected Product
  console.log("this is me getting explanation: " + this.selectedProduct.explanation) //This Displays The Selected Product
  // console.log("meaning is: " + this.simplified)
  this.stepper.selectedIndex = this.stepper.steps.length - 1; // Move to the selected product step
  this.select = true
}

clearSelect(){
  this.select = false
  // this.simplified = " "
  // this.prodName = " "
  this.stepper.selectedIndex = this.stepper.steps.length - 1;
}

getThisProduct(title: any){
  this.chosenProd = this.selectedProduct.title
  
  if (this.chosenProd == "Life Cover"){
    this.redirectURL = 'https://www.absa.co.za/personal/insure/my-life/explore/'
  }

  if (this.chosenProd == "Disability Cover"){
    this.redirectURL = 'https://www.absa.co.za/personal/insure/my-life/instant-life/'
  }

  if (this.chosenProd == "Retirement Cover"){
    this.redirectURL = 'https://www.absa.co.za/personal/save-invest/products/absa-retirement-annuity/'
  }

  if (this.chosenProd == "Educational Trust"){
    this.redirectURL = 'https://www.absa.co.za/personal/save-invest/products/absa-fundisa-fund/'
  }

  if (this.chosenProd == "Investments"){
    this.redirectURL = 'https://www.absa.co.za/personal/save-invest/products/'
  }

  const newWindow: Window | null = window.open("", "_blank");
if (newWindow) {
    newWindow.location.replace(this.redirectURL);
}

  // window.location.replace(this.redirectURL)
  console.log("This returns the chosen product: " + this.chosenProd)
  console.log("This returns the external URL: " + this.redirectURL)
}

}
