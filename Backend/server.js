// const express = require('express');
// const dotenv = require('dotenv');
// const userRoutes = require('./app/routes/userRoutes');
// const authRoutes = require('./app/routes/authRoutes');
// const sequelize = require('./app/Utils/database');

// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.json({'Project Name:': 'Secure Legacy'})
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { authRouter } = require('./app/Routes/authRoutes');
const sequelize = require('./app/Utils/database');
const User = require('./app/Models/userModel');
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/auth', authRouter);


// app.get('/', (req, res) => {
//   res.json({'Project Name:': 'Secure Legacy'})
// })

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
    // await sequelize.sync(); // Creates tables if they don't exist
    await sequelize.sync({ force: true });
    console.log('All models were synchronized successfully.');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
})();
