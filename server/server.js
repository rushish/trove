const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 5000;

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Aman@0422',
    database: 'throve'
});

// Connect to MySQL
connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
