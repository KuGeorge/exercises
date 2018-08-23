//import express from 'express';
let express = require('express');
let flightController = require('./exercises.controller');

let router = express.Router();
// more routes /persons for our API will happen here
// ----------------------------------------------------



router.get('/fibonacci', flightController.getFibonacci);
router.post('/fibonacci', flightController.createFibonacci);

router.get('/complex/calculator', flightController.getComplexCalculator);
router.post('/complex/calculator', flightController.createComplexCalculator);
router.get('/palindromo', flightController.getPalindromo);
router.post('/palindromo', flightController.createPalindromo);
router.get('/operation/sets', flightController.getOperationSets);
router.post('/operation/sets', flightController.createOperationSets);

module.exports = router;