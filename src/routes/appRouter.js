const express = require('express');
const appRouter = express.Router();

const authRoutes = require('./authRoutes');
const todoRoutes = require('./todoRoutes');

// Routes
appRouter.use('/api/auth', authRoutes);
appRouter.use('/api/todos', todoRoutes);

module.exports = appRouter;
