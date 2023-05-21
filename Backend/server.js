const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config({path:'./.env'});
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

dotenv.config();
app.use(cookieParser());

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
const store = require('./routes/api/store.js');
const senior = require('./routes/api/senior.js');
const guardian = require('./routes/api/guardian.js');
const admin = require('./routes/api/admin.js');

// init Middleware
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('API Running'));

app.use('/auth', auth);
app.use('/office', office);
app.use('/store/', store);
app.use('/senior', senior);
app.use('/guardian', guardian);
app.use('/admin', admin);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

