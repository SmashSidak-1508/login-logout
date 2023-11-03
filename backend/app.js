const express = require('express');
const authRouter = require('./router/authRoute');
const databaseconnect = require('./config/databaseConfig');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const app = express();
databaseconnect();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
     origin: [process.env.CLIENT_URL], 
     credentials: true }));

app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
    res.status(200).json({
        data: "JWT AUTH server"
    });
});

module.exports = app;
