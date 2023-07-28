import { Component, OnInit } from '@angular/core';
import { GptService } from 'src/app/services/gpt.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private gptservice: GptService) { }

  ngOnInit(): void {
  }
  userAnswers = {
    has_dependents: false,
    financial_burden_concern: false,
    is_primary_breadwinner: false,
    planning_for_child_education: false,
    tax_efficient_savings_plan: false,
    physically_demanding_job: false,
    sufficient_emergency_savings: false,
    willing_to_accept_risk: false,
    specific_financial_goals: false,
    planning_for_retirement: false,
    concerns_about_outliving_savings: false,
    retirement_plan_with_tax_benefits: false
  };

  recommendations: any[] = [];



  onSubmit() {
    this.gptservice
      .getRecommendations(this.userAnswers)
      .subscribe(
        (data) => {
          this.recommendations = data.recommendedProducts;
        },
        (error) => {
          console.error('Error fetching recommendations:', error);
        }
      );
  }
}


