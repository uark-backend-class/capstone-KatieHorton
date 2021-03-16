const express = require('express');
const routes = require('./routes');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.urlencoded());
app.use(express.json());
//app.use('/middleware/is-Authenticated/isAuthenticated')
app.use(routes);

app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});