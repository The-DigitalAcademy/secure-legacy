import { Component, OnInit,  ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { GptService } from 'src/app/services/gpt.service';
import { MatStepper } from '@angular/material/stepper'; 
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: [ '', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  forthFormGroup = this._formBuilder.group({
    forthCtrl: ['', Validators.required],
  });
  fifthFormGroup = this._formBuilder.group({
    fifthCtrl: ['', Validators.required],
  });
  isLinear = true;
  hidden = true;

  userAnswers = {
    has_dependents: false,
    planning_for_child_education: false,
    physically_demanding_job: false,
    specific_financial_goals: false,
    retirement_plan_with_tax_benefits: false
  };

 
  recommendations: any[] = [];

  selectedProduct: any; // To store the selected product
  selectedProductFormGroup: FormGroup = this._formBuilder.group({}); // Initialize FormGroup for the selected product st // FormGroup for the selected product step
  @ViewChild('stepper') stepper!: MatStepper;

  constructor(private _formBuilder: FormBuilder, private gptservice: GptService) {}


  ngOnInit(): void {
    console.log(this.firstFormGroup)
    this.selectedProductFormGroup = this._formBuilder.group({});
  }

  selectProduct(product: any) {
    this.selectedProduct = product;
    this.stepper.selectedIndex = this.stepper.steps.length - 1; // Move to the selected product step
  }

  // onSubmit() {
  //   this.gptservice
  //     .getRecommendations(this.userAnswers)
  //     .subscribe(
  //       (data) => {
  //         this.recommendations = data.recommendedProducts;
  //         console.log(this.recommendations)
  //       },
  //       (error) => {
  //         console.error('Error fetching recommendations:', error);
  //       }
  //     );
  // }

  // DONE(){
  //   this.gptservice
  //   .getRecommendations(this.userAnswers)
  //   .subscribe(
  //     (data) => {
  //       this.recommendations = data.recommendedProducts;
  //       console.log(this.recommendations)
  //       console.log("this is retuning something")
  //       console.log(this.userAnswers)
  //     },
  //     (error) => {
  //       console.error('Error fetching recommendations:', error);
  //     }
  //   );
  // }
 
  DONE() {
    this.userAnswers = {
      has_dependents: this.secondFormGroup.get('secondCtrl')?.value === 'true',
      planning_for_child_education: this.fifthFormGroup.get('fifthCtrl')?.value === 'true',
      physically_demanding_job: this.firstFormGroup.get('firstCtrl')?.value === 'true',
      specific_financial_goals: this.forthFormGroup.get('forthCtrl')?.value === 'true',
      retirement_plan_with_tax_benefits: this.thirdFormGroup.get('thirdCtrl')?.value === 'true',
    };
  
    this.gptservice.getRecommendations(this.userAnswers).subscribe(
      (data) => {
        this.recommendations = data.recommendedProducts;
        console.log(this.recommendations);
        console.log('this is returning something');
        console.log(this.userAnswers);
      },
      (error) => {
        console.error('Error fetching recommendations:', error);
      }
    )

}

}
