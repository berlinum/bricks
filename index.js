// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const multer = require('multer');
const auth = require('./lib/routes/auth');
const search = require('./lib/routes/search');
const collection = require('./lib/routes/collection');
const profile = require('./lib/routes/profile');
const uploader = require('./lib/routes/uploader');

const port = process.env.PORT || 8080;
const app = express();
const upload = multer();

// Parse application/json for all requests
app.use(express.json());

app.use('/api/auth', auth);

app.use('/api/search', search);

app.use('/api/collection', collection);

app.use('/api/collection', profile);

app.use('/api/upload', upload.single('file'), uploader);

// Serve any static files
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'client/build/index.html'));
});

async function start() {
  try {
    await mongoose.connect(process.env.DB_URL, {
      dbName: process.env.DB_NAME,
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
