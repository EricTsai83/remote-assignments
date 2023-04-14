const express = require('express');
const app = express();

// tell express which template is used
// app.set('view engine', 'pug');

// parameter is the file position
const mainRoutes = require('./routes');
// The `app.use` method is used to specify middleware functions that
// should be executed for every incoming request to the application.
app.use(mainRoutes);

const getData = require('./routes/getData');
app.use(getData);

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('The application is running on localhost:3000!');
});
