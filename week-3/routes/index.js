const express = require('express');
// These routing methods specify a callback function (sometimes called “handler functions”) called when
// the application receives a request to the specified route (endpoint) and HTTP method. In other words,
// the application “listens” for requests that match the specified route(s) and method(s), and when it detects
//  a match, it calls the specified callback function.
const router = express.Router();

router.get('/', (req, res) => {
  // `res.send` is used to send a plain text or HTML response to the client.
  res.send('Hello, My Server!');
});

module.exports = router;
