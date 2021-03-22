const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./routes');
/*
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const authRoutes = require('./routes/auth.routes');
const routes = require('./routes');
const passport = require("./services/passport");
*/

const PORT = 3000;

const app = express();


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
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.urlencoded());
app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));