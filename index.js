const express = require('express');
const app = express();
const routes = require('./routes');
const port = 3000;
const exphbs = require('express-handlebars');
const db = require('./db');

app.use(express.urlencoded());
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(routes);

app.listen(port, () => console.log(`Server listening on port: ${port}`));
