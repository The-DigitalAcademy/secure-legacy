// Import necessary modules and dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { authRouter } = require('./app/Routes/authRoutes');
const sequelize = require('./app/Utils/database');
const User = require('./app/Models/userModel');
const Survey = require('./app/Models/surveyModel');
const app = express();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');
const surveyRoutes = require('./app/Routes/surveyRoutes')
const PORT = process.env.PORT || 3000;

app.use(cors());

// Configure Swagger documentation options
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Secure Legacy App API',
      version: '1.0.0',
      description: 'API for recommending products with kid-friendly explanations',
    },
    servers: [
      {
        url: `https://legacyserver.onrender.com/`,
        // url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: [
    path.join(__dirname, './app/Controllers/gpt.js'),
    // path.join(__dirname, './app/GPTServices/openai.js'),
    path.join(__dirname, './app/Swagger/Swagger-doc.js'),
  ],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Serve API documentation JSON
app.get('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Configure middleware and application routes
app.use(bodyParser.json()); // Parse JSON requests
app.use(cors()); // Enable CORS

// Import the recommendations controller
const { getRecommendations, getMeaningOfWord } = require('./app/Controllers/gpt');

// Define API routes for recommendations and meanings
app.post('/api/recommendations', getRecommendations); // API route for recommendations
app.post('/api/meaning', getMeaningOfWord); // API route for word meanings

// Set up authentication routes
app.use('/auth', authRouter);
// Set up survey routes
app.use('/api/survey', surveyRoutes)
app.use('/api/getallSurveys', surveyRoutes)

// Define a default route
app.get('/', (req, res) => {
  res.json({ 'Project Name:': 'Secure Legacy' });
});

// Connect to the database and start the server
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
    await sequelize.sync({ force: false });
    console.log('All models were synchronized successfully.');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
})();