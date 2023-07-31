// services/openai.js
const axios = require('axios');
const dotenv = require('dotenv');
const openAIApiKey = '';
// const openAIApiKey = `${process.env.APIKEY}`

async function getKidFriendlyExplanation(title) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/text-davinci-003/completions',
      // Use 'text-davinci-003' engine for GPT-3.5 Turbo
      {
        prompt: `Explain "${title}" like a five-year-old, use a minimum of 250 words:`,
        max_tokens: 50,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${openAIApiKey}`, // Use 'Bearer' prefix before the API key
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error fetching kid-friendly explanation:', error.message);
    return null;
  }
}
module.exports = {
  getKidFriendlyExplanation,
};
