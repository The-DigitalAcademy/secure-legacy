// services/recommendations.js
function recommendInsuranceProduct(answers) {
    const recommendedProducts = [];
  
    if (answers.has_dependents) {
      recommendedProducts.push("Life Cover");
    }
  
    if (answers.planning_for_child_education && answers.has_dependents) {
      recommendedProducts.push("Educational Trust");
    }
  
    if (answers.physically_demanding_job) {
      recommendedProducts.push("Disability Cover");
    }
  
    if (answers.specific_financial_goals) {
      recommendedProducts.push("Investments");
    }
  
    if (answers.retirement_plan_with_tax_benefits) {
      recommendedProducts.push("Retirement Cover");
    }
  
    return recommendedProducts;
  }
  
  module.exports = {
    recommendInsuranceProduct,
  };
  