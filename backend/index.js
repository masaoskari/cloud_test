const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: '*',
}));

let coffees = [
  { _id: 1, name: 'Espresso', description: 'Strong and black' },
  { _id: 2, name: 'Latte', description: 'Espresso with milk' },
  { _id: 3, name: 'Cappuccino', description: 'Espresso with frothed milk' },
];

app.get('/api/coffees', (req, res) => {
  res.json(coffees);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));