const express = require('express');
const routes = require('./routes')
const port = 3000;

const app = express();
// app.use(<server-side-rendering>)
app.use(express.json());
//app.use('/middleware/is-Authenticated/isAuthenticated')
app.use(routes);

app.listen(3000, () => {
  console.log(`Server listening on port ${port}`);
});
