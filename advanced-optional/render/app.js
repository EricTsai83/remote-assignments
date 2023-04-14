const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

// tell express which template is used
app.set('view engine', 'pug');

// include cookieParser and bodyParser in your app:
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

// parameter is the file position
const mainRoutes = require('./routes');
// The `app.use` method is used to specify middleware functions that
// should be executed for every incoming request to the application.
app.use(mainRoutes);

const getData = require('./routes/getData');
app.use(getData);

const myName = require('./routes/myName');
app.use(myName);

app.use(express.static('public'));

// need to use `process.env.PORT` to let you deploy web server on render.com
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
