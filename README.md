# Secure Legacy 

Secure Legacy Insurance Recommendations is a web application that leverages artificial intelligence (AI) to provide tailored insurance recommendations for wealth management. The application is built with a modern tech stack including Angular for the frontend, Node.js with Express.js for the backend, and utilizes PostgreSQL as the database. The user interface is styled using Tailwind CSS. The entire project is managed on GitHub for seamless collaboration.

## Features

- Personalized Insurance Recommendations: Secure Legacy uses AI algorithms to analyze user financial data and preferences to provide highly personalized insurance recommendations for wealth protection.

- User Authentication and Authorization: Secure Legacy supports user authentication, allowing only authorized users to access the personalized insurance recommendations and wealth analysis features.

## Tech Stack

- Angular
- Node.js
- Express.js
- PostgreSQL
- Tailwind CSS

## API Endpoints

### Authentication
```
POST /auth/register: Register a new user
POST /auth/login: Log in an existing user
```

### Recommendations
```
POST /api/recommendations: Get product recommendations with kid-friendly explanations based on user inputs.
```

### Word Meaning
```
POST /api/meaning: Get kid-friendly explanation for a given word.
```

### Dependencies
```
axios: ^1.4.0
bcrypt: ^5.1.0
body-parser: ^1.20.2
cors: ^2.8.5
dotenv: ^16.3.1
express: ^4.18.2
handlebars: ^4.7.8
jsonwebtoken: ^9.0.1
nodemailer: ^6.9.4
pg: ^8.11.1
pg-hstore: ^2.3.4
sequelize: ^6.32.1
swagger-jsdoc: ^6.2.8
swagger-ui-express: ^5.0.0
```

## Installation and Setup

To install and run Secure Legacy Insurance Recommendations, follow these steps:

1. Clone the GitHub repository to your local machine:

   ```
   git clone https://github.com/The-DigitalAcademy/secure-legacy.git
   ```

   Navigate to the project directory:

```
cd secure-legacy

```
Install the required dependencies for the frontend and backend:

```
cd Frontend
npm install
```

```
cd Backend
npm install
```

Start the application:

In the client directory, run the following command to start the frontend:

```
ng serve
```
In the server directory, run the following command to start the backend:
```
npm start
```
Open your web browser and visit http://localhost:4200 to access Secure Legacy.

Hosted Application
```
Backend: https://legacyserver.onrender.com/
Frontend: https://secure-legacy-v1.vercel.app/home
```



