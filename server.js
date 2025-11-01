const express = require('express');
const connectDB = require('./config/db.config');

// 1. Connect to Database
connectDB();

const app = express();
// 2. Middleware setup (body-parser, cors, etc.)
app.use(express.json()); 

// 3. Import and use routes
// const authRoutes = require('./routes/auth.routes');
// app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
