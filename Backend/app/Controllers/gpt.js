/**
 * @swagger
 * tags:
 *   name: Recommendations
 *   description: API for product recommendations with kid-friendly explanations
 */

/**
 * @swagger
 * /api/recommendations:
 *   post:
 *     tags: [Recommendations]
 *     summary: Get product recommendations with kid-friendly explanations based on user inputs.
 *     description: Retrieve product recommendations and explanations based on user answers.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               answers:
 *                 type: object
 *                 # Add the properties and their types as per your actual input requirements
 *     responses:
 *       200:
 *         description: A JSON array of recommended products with kid-friendly explanations.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 recommendedProducts:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                       explanation:
 *                         type: string
 */


// controllers/recommendations.js
const { recommendInsuranceProduct } = require('../GPTServices/gpt');
const { getKidFriendlyExplanation } = require('../GPTServices/openai');

async function getRecommendations(req, res) {
  const userAnswers = req.body.answers;

  try {
    // Get recommended products based on user answers
    const recommendedProducts = recommendInsuranceProduct(userAnswers);

    // Get kid-friendly explanations for recommended products
    const productExplanations = await Promise.all(
      recommendedProducts.map(title => getKidFriendlyExplanation(title))
    );

    // Filter out titles without explanations
    const productsWithExplanations = recommendedProducts.reduce((acc, title, index) => {
      if (productExplanations[index]) {
        acc.push({
          title,
          explanation: productExplanations[index],
        });
      }
      return acc;
    }, []);

    res.json({ recommendedProducts: productsWithExplanations });
  } catch (error) {
    console.error('Error fetching recommendations:', error.message);
    res.status(500).json({ error: 'Error fetching recommendations' });
  }
}

module.exports = {
  getRecommendations,
};


