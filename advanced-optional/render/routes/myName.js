const express = require('express');
const router = express.Router();

// router.get('/myName', (req, res) => {
//   // check name from cookie
//   const cookieName = req.cookies.name;
//   const inputName = req.query.name;
//   if (cookieName) {
//     res.send(`Done. ${cookieName}`);
//   } else if (inputName) {
//     res.cookie('name', inputName);
//     res.redirect(`/myName`);
//   } else {
//     res.render('myName');
//   }
// });

router.get('/myName', (req, res) => {
  // check name from cookie
  const cookieName = req.cookies.name;
  const inputName = req.query.name;

  if (cookieName) {
    res.send('Done.');
  } else if (inputName) {
    res.redirect(`/trackName?name=${inputName}`);
  } else {
    res.render('myName');
  }
});

module.exports = router;
