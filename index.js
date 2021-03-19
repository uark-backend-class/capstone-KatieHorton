const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const routes = require('./routes');
/*
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const authRoutes = require('./routes/auth.routes');
const routes = require('./routes');
const passport = require("./services/passport");
*/
const { URI, SECRET } = require("./config");

const PORT = 3000;

const app = express();

app.use(express.json());
/*
app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      url: URI,
      autoRemove: "interval",
      autoRemoveInterval: 10,
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(authRoutes);
*/
app.use(express.urlencoded());
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(routes);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Magically connected to userDB'))
  .catch((error) => console.error(error));

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));