const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const bills = [];

app.get('/items', (req, res) => {
  res.json(bills);
});

app.post('/items', (req, res) => {
  const { patientName, patientAddress, hospitalName, dateOfService, billAmount } = req.body;
  const bill = { patientName, patientAddress, hospitalName, dateOfService, billAmount };
  bills.push(bill);
  res.status(201).json(bill);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
