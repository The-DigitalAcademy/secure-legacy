// services/recommendations.js
function recommendInsuranceProduct(answers) {
    const recommendedProducts = [];
  
    if (answers.has_dependents && answers.financial_burden_concern && answers.is_primary_breadwinner) {
      recommendedProducts.push("Life Cover");
    }
  
    if (answers.planning_for_child_education && answers.tax_efficient_savings_plan) {
      recommendedProducts.push("Educational Trust");
    }
  
    if (answers.physically_demanding_job && !answers.sufficient_emergency_savings) {
      recommendedProducts.push("Disability Cover");
    }
  
    if (answers.willing_to_accept_risk && answers.specific_financial_goals) {
      recommendedProducts.push("Investments");
    }
  
    if (answers.planning_for_retirement && answers.concerns_about_outliving_savings && answers.retirement_plan_with_tax_benefits) {
      recommendedProducts.push("Retirement Cover");
    }
  
    return recommendedProducts;
  }
  
  module.exports = {
    recommendInsuranceProduct,
  };
  