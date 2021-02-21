const express = require('express');
const connectDB = require('./config/db');
const colors = require('colors');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
  res.json({ msg: 'Hole, bienvenido a contact-keeper API' })
);

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
