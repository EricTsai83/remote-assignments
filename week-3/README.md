# Launch A Web Server

1. Install Node.js:

   https://nodejs.org/en/download

2. Create a Node.js project by npm:

   `npm init -y`

3. Install Express module in your Node.js project by npm:

   `sudo npm install express --save` or

   `npm install express --save`

4. Write a simple web server program and start it:

```js
// ./app.js

const express = require('express');
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('Hello, My Server!');
});

app.listen(3000, () => {
  console.log('The application is running on localhost:3000!');
});
```

> url: localhost:3000

5. Build Backend API for Front-End with following requirements
   - When a user enters http://localhost:3000/getData in a browser’s address bar, show
     the "Lack of Parameter" message in the page.
   - When a user enters some url like http://localhost:3000/getData?number=xyz in a
     browser’s address bar, show the "Wrong Parameter" message in the page.
   - When a user enters http://localhost:3000/getData?number=5, they should get the
     result of 1+2+....+5 in the page.
   - Generally speaking, when a user enters
     http://localhost:3000/getData?number=POSITIVE_INTEGER, they can get the result
     of 1+2+....+ POSITIVE_INTEGER in the page.

You can use [Pug](https://pugjs.org/api/getting-started.html) to create documentation for your API or to generate API responses in a specific format. First things first, install Pug by following code:

`sudo npm install pug --save`

6. Connect to Backend API by AJAX

   - Update your Express project to serve static files. You can refer to this [document](https://expressjs.com/en/starter/static-files.html)
   - Serve a static HTML file named sum.html. It means you can enter
     [http://localhost:3000/sum.html](http://localhost:3000/sum.html) in a browser’s address bar to get this HTML page.

   - Write a simple user interface (a text input and a button) and some JavaScript code in
     sum.html to let users enter a number and make an HTTP request by AJAX to the API
     implemented in assignment 2, and show the result from the server.
