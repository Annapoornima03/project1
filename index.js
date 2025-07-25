const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const userRoutes = require('./routes/userRoutes');
// const  menuRoutes=require('./routes/foodRoutes');
const  studentRoutes=require('./routes/studentRoutes');
const menuRoutes = require('./routes/menuRoutes');

const PORT = 3000;

// Middleware
app.use(express.json());
app.use(logger);
require('dotenv').config();

const connectDB = require('./dbconnection/db').default;
connectDB();
// Routes
app.use('/users', userRoutes);
// app.use('/menu', menuRoutes);
app.use('/students', studentRoutes);
app.use('/api/menu', menuRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
