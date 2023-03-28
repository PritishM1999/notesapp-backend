const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dbConfig = require('./config/db');
const authRoutes = require('./routes/auth');
const notesRoutes = require('./routes/notes');
const setupMiddleware = require('./config/middleware');
require('dotenv').config();

// DB_URL='mongodb+srv://Pritish:Pritish@cluster0.l6mdxol.mongodb.net/?retryWrites=true&w=majority'
JWT_SECRET="NOTESAPP"

// Connect to MongoDB
mongoose.connect("mongodb+srv://Pritish:Pritish@cluster0.l6mdxol.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser:true, useUnifiedTopology:true})
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(`MongoDB Error: ${err}`));

// mongoose.connect(process.env.DB_URL, dbConfig.options)
//   .then(() => console.log('MongoDB Connected'))
//   .catch((err) => console.log(`MongoDB Error: ${err}`));

// Set up middleware
setupMiddleware(app);

// Set up routes
app.use('/auth', authRoutes);
app.use('/notes', notesRoutes);

app.use(function(err, req, res, next) {
  res.status(500);
  res.sendFile(path.join(__dirname, 'public', '500.html'));
});


// Start the server
app.listen(5000, () => {
  console.log('Server started on port 5000');
});
