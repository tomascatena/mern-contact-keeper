const express = require('express');

const app = express();

app.get('/', (req, res) =>
  res.json({ msg: 'Hole, bienvenido a contact-keeper API' })
);

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
