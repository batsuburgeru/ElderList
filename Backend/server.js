const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({
    origin: ['http://localhost:8081'],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    secure: true
}));


const auth = require('./routes/api/auth.js');

// init Middleware
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('API Running'));

app.use('/auth', auth);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

