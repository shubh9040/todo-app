const express = require('express');
const connectDB = require('./config/db'); // Ensure the correct path
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/errorHandler');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
const appRouter = require('./routes/appRouter'); // Ensure the correct path
app.use(appRouter);

// Error handler
app.use(errorHandler);

module.exports = app;
