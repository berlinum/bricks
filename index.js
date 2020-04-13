// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const auth = require('./lib/routes/auth');

const port = process.env.PORT || 8080;
const app = express();

// Parse application/json for all requests
app.use(express.json());

app.use('/api/auth', auth);

async function start() {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    app.listen(port, () => {
      console.log(`Server is running http://localhost:${port}`);
    });
  } catch (error) {
    console.log('Server error', error.message);
    process.exit(1);
  }
}
start();

// Serve any static files
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'client/build/index.html'));
});
