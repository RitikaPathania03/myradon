const express = require('express');
//const externalModule = require('../logger/logger')
//const externalModule= require( './helper')
const myHelper = require('..util/helper')
const router = express.Router();

//router.get('/welcome', function (req, res) {    
  //  console.log('I am Ritika and a part of FunctionUp Radon Cohort')
    //res.send('I am Ritika and a part of FunctionUp Radon Cohort.')
//});

//router.get('/test-me1', function (req, res) {
    //res.send('My second ever api!')
//})//;

//router.get('/test-me2', function (req, res) {
  //  res.send('My third api!')
//});

//router.get('/test-me3', function (req, res) {
  //  res.send('My 4th api!')
//});

//router.get('/test-me4', function (req, res) {
   // res.send('My last api!')
//});
//router.get('/PrintDate', function (req, res) {
  //  res.send('02-06-2022')
//})
router.get('/test-me', function (req, res){
    myHelper.printDate()
    myHelper.getCurrentMonth()
    res.send('my first ever api!')
});

module.exports = router;
// adding this comment for no reason