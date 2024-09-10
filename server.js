const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static('.'));
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const { name, semester, phone, amount } = req.body;

    // Save data to CSV
    const data = ${name},${semester},${phone},${amount},Confirmed\n;
    fs.appendFile('contributions.csv', data, (err) => {
        if (err) {
            console.error('Error saving data to CSV', err);
            res.json({ message: 'An error occurred. Please try again.' });
        } else {
            res.json({ message: 'Payment confirmed. Thank you!' });
        }
    });
});

app.listen(port, () => {
    console.log(Server is running at http://localhost:${port});
});