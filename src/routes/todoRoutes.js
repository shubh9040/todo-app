const express = require('express');
const router = express.Router();
const {
  createTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todoController');
const { protect } = require('../middlewares/authMiddleware');

// Route: POST /api/todos/create - Create a new todo
router.post('/create', protect, createTodo);

// Route: GET /api/todos/get-all - Get all todos
router.get('/get-all', protect, getTodos);

// Route: GET /api/todos/get/:id - Get a specific todo
router.get('/get/:id', protect, getTodo);

// Route: PUT /api/todos/update/:id - Update a specific todo
router.put('/update/:id', protect, updateTodo);

// Route: DELETE /api/todos/delete/:id - Delete a specific todo
router.delete('/delete/:id', protect, deleteTodo);

module.exports = router;
