const express = require('express');
const router = express.Router();

router.get('/getData', (req, res) => {
  // `res.send` is used to send a plain text or HTML response to the client.
  let { number } = req.query;

  if (number && isPositiveInteger(number)) {
    number = Number(number);
    let numberSum = ((1 + number) * number) / 2;
    res.send(numberSum.toString());
  } else if (number) {
    res.send('Wrong Parameter');
  } else {
    res.send('Lack of Parameter');
  }
});

module.exports = router;

function isPositiveInteger(str) {
  var n = Math.floor(Number(str));
  return n !== Infinity && String(n) === str && n >= 0;
}
