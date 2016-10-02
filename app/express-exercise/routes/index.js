var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/',
  function(req, res, next) {
    console.log('GET from Express Part 1');
    next();
  },
  function(req, res) {
    console.log('GET from Express Part 2');
    res.send('GET from Express Part 2');
  }
);


router.get('/conference/:conferenceId/day/:dayId',
  function(req, res, next) {
    if(req.params.conferenceId == 1){
      next('route');
    }
    else if(req.params.conferenceId > 4){
      next({
        message: 'No conference was found with Id ' + req.params.conferenceId
      });
    }
    else{
      next();
    }
  },
  function(req, res){
    res.send('GET Conference ' + req.params.conferenceId + ', day ' + req.params.dayId + ' from Express');
  });

router.get('/conference/:conferenceId/day/:dayId',
  function(req, res) {
    res.send('GET SPECIAL! Conference ' + req.params.conferenceId + ', day ' + req.params.dayId + ' from Express');
  });

router.post('/', function(req, res) {
  res.send('POST from Express');
});

router.route('/multi')
  .get(function(req, res){
    res.send('Multi Get');
  })
  .post(function(req, res){
    res.send('Multi Post)')
  });


module.exports = router;
