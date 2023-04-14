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

6. Connect to Backend API by AJAX

   - Update your Express project to serve static files. You can refer to this [document](https://expressjs.com/en/starter/static-files.html)
   - Serve a static HTML file named sum.html. It means you can enter
     [http://localhost:3000/sum.html](http://localhost:3000/sum.html) in a browser’s address bar to get this HTML page.

   - Write a simple user interface (a text input and a button) and some JavaScript code in
     sum.html to let users enter a number and make an HTTP request by AJAX to the API
     implemented in assignment 2, and show the result from the server.

[Pug](https://pugjs.org/api/getting-started.html) is a template engine that is commonly used in Express to generate **dynamic HTML pages**. In Express, Pug is used to render views, which are the HTML pages that are sent to the client's browser.

> **Note:**
>
> - Dynamic HTML pages are web pages that are generated on the server-side and contain content that changes based on user input or other factors. Unlike static HTML pages, which are pre-written and do not change, dynamic HTML pages are created on the fly and can display different content each time they are loaded.
> - Dynamic HTML pages are typically generated using server-side scripting languages like PHP, Python, or Node.js, and are often built using a template engine like Pug or Handlebars.

First things first, install Pug by following code:

`sudo npm install pug --save`

And use this [website](https://html2jade.org/) can convert html file to pug file.

7. Modify your code executed in the backend to use cookies for user tracking
   - step 1. Serve a URL http://localhost:3000/myName by your server.
   - step 2. When the user connects to http://localhost:3000/myName, check cookies for the user's name in the backend.
     - If you can get the user's name from cookies, show it on the web page. **Done.**
     - If you cannot get the user's name from cookies, show a HTML form including a text input and a button in the web page. **Go to step 3**.
   - step 3. User can enter his name in the text input, and then click button to submit form to a URL http://localhost:3000/trackName?name=使用者的輸入 which should be served from your server, too.
   - step 4. When user submits form to http://localhost:3000/trackName?name=使用者的輸入, you should get user’s name from HTTP parameter and store it in the cookies.
   - step 5. Redirect user to http://localhost:3000/myName, user can see his name, finally. Done.

> Some package need to be installed:
>
> 1.  `npm install cookie-parser --save`
> 2.  `npm install body-parser --save`
