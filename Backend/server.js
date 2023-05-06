const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');

const cors = require('cors');
app.use(cors({
    origin: ['http://localhost:8080'],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    secure: true
}));


const auth = require('./routes/api/auth.js');
const office = require('./routes/api/office.js');

// init Middleware
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('API Running'));

app.use('/auth', auth);
app.use('/office', office);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

