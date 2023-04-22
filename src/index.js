const express = require('express');
const app = express();
require('dotenv').config();

const models = require('../src/models/index.js');

const cors = require("cors");

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions));

const routes = require('./routes.js');
app.use('/api', routes);

const PORT = process.env.PORT || 5500;

models.sequelize.sync()
    .then(() => {
        app.listen(PORT, () => console.log(`App running on port ${PORT}`));
    })
    .catch(() => {
        console.log('Unable to connect to db');
    }) 