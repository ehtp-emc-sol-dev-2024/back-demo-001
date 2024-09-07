const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/consultants', (req, res) => {
  const consultants = [
    { id: 1, firstName: 'Ahmed', lastName: 'El Haddad', CIN: 'A123456' },
    { id: 2, firstName: 'Fatima', lastName: 'Ben Ali', CIN: 'B654321' }
  ];
  res.json(consultants);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
