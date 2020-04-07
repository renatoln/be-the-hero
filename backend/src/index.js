const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); //informa que o padrão de mesnagem é json

app.use(routes);

app.listen(3333);