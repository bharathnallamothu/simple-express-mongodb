
var express = require('express');
var router = express.Router();

/* GET home page. */
const home = router.get('/', function (req, res, next) {
  res.send('Hey you there....RAT?')
});

// module.exports = router;


import contact from './contact';

export default {
  home,
  contact
};
