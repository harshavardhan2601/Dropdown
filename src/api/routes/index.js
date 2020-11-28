const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
var fs = require('fs');
var drop = require('../models/drop');


// Defined store route
// add data//
router.post('/savedata', function (req, res, next) {
    try {
      var reqs = req.body;
      console.log(reqs);
      var state = {
        country_name:reqs.country_name,
        state_name: reqs.state_name,
        district_name:reqs.district_name,
        status: 1
      }
      mongoose.model("drop").create(state, (err, dropObj) => {
        if (dropObj) {
          console.log(dropObj);
          res.send('country');
        } else {
          console.log('failure');
        }
        
      });
    } catch (e) {
      console.log(e);
    }
  });


// // Defined get data(index or listing) route
router.get('/', function (req, res, next) {

    try {
      mongoose.model("drop").find({}, (err, stateObj) => {
        if (err) {
          console.log(err);
        } else {
          // res.render('country', { stateObj: stateObj });
        res.json(stateObj)
        }
      });
    } catch (e) {
      console.log(e);
    }
  });


// Defined edit route
router.get('/edit/:dataId',  function (req, res, next) {
  dataId = req.params.dataId;
  console.log(dataId)
  mongoose.model('drop').findById({ "_id": dataId }, function (err, dropobj) {
    if (err) {
      console.log(err);
    } else {
      if (dropobj) {
        console.log(dropobj)
        res.json(dropobj);
      } 
    }
  });
});

//  Defined update route
router.post('/update/:dataId',  function (req, res, next) {
  dataId = req.params.dataId;
  console.log(dataId)
  var reqs = req.body;
  mongoose.model('drop').findOneAndUpdate({ _id:req.params.dataId }, {
    $set: {
        country_name:reqs.country_name,
        state_name: reqs.state_name,
        district_name:reqs.district_name,
        status: 1
    }
  }, function(err, updatedropObj) {
    if (err) {
      console.log(err);
    } else {
      if (updatedropObj) {
        console.log(updatedropObj);
        res.json('Update complete');
      } 
    }
  });
});

// Defined delete | remove | destroy route
router.get('/delete/:id', function(req, res) {
  try {
    var dataId = req.params.id;
    console.log(dataId);
    mongoose.model('drop').remove({ _id: dataId }, (err, dataObj) => {
      if (err) {
        console.log(err);
      } else {
        res.json('deleted');
      }
    });
  }
  catch (e) {
    console.log();
  }
});

router.get('/getcountry', function (req, res, next) {

  try {
    var dataArr = [];
    mongoose.model("drop").find({}, (err, stateObj) => {
      if (err) {
        console.log(err);
      } else {
        // res.render('country', { stateObj: stateObj });
      // res.json(stateObj)
      // console.log(stateObj)
      for (let i = 0; i < stateObj.length; i++) {
        console.log(dataArr.indexOf(stateObj[i].country_name))
        if (dataArr.indexOf(stateObj[i].country_name) == -1) {
          dataArr.push(stateObj[i].country_name)
        }
      }
      console.log(dataArr)
      res.json(dataArr)
      }
    });
  } catch (e) {
    console.log(e);
  }
});

/* Request For state dropdowm  */
router.post('/getcountryDetail/:id',  function (req, res, next) {
  try {
    var dataArr = [];
    let reqs = req.body;
    console.log(reqs);
    var dataId = req.params.id;
    console.log(dataId);
    mongoose.model('drop').find({ 'country_name': dataId }, function (err, stateArray) {
      if (err) {
        console.log(err);
        res.json({ data: 'Failure' });
      } else {
        if (stateArray) {
          // res.json(stateArray);
            // console.log(stateArray)
          for (let i = 0; i < stateArray.length; i++) {
            console.log(dataArr.indexOf(stateArray[i].state_name))
            if (dataArr.indexOf(stateArray[i].state_name) == -1) {
              dataArr.push(stateArray[i].state_name)
            }
          }
          console.log(dataArr)
          res.json(dataArr)
        } 
      }
    });
  } catch (e) {
    console.log(e);
  }
});

/* Request For district dropdowm  */
router.post('/getstateDetail/:id',  function (req, res, next) {
  try {
    let reqs = req.body;
    console.log(reqs);
    var dataId = req.params.id;
    console.log(dataId);
    mongoose.model('drop').find({ 'state_name': dataId }, function (err, districtArray) {
      if (err) {
        console.log(err);
        res.json({ data: 'Failure' });
      } else {
        console.log(districtArray)
        if (districtArray) {
          res.json(districtArray);
        } 
      }
    });
  } catch (e) {
    console.log(e);
  }
});



  module.exports = router;