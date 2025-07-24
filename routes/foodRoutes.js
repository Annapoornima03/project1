const express = require('express');
const router = express.Router();
const {
  getMenu,
  getMenuItem,
  addMenuItem,
  updateMenuItem,
  deleteMenuItem
} = require('../controllers/foodController');

// Routes
router.get('/', getMenu);
router.get('/:id', getMenuItem);
router.post('/', addMenuItem);
router.put('/:id', updateMenuItem);
router.delete('/:id', deleteMenuItem);

module.exports = router;
