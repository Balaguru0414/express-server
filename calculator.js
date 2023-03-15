'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended : true}));

// %%%%%%%%%%%%%%% Calculator %%%%%%%%%%%%%%%

app.get('/',function (req,res) {
	res.sendFile(__dirname + '/index.html')
})

app.post('/',function (req,res) {
	const num1 = +req.body.n1;
	const num2 = +req.body.n2;

	const result = num1 + num2;

	res.send(`The result of the Calculation is ${result}`)
})

// %%%%%%%%%%%%%%% BMI Calculator %%%%%%%%%%%%%%%

app.get('/bmiCalculator',function (req,res) {
	res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post('/bmiCalculator',function (req,res) {
	const weight = parseFloat(req.body.weight);
	const height = parseFloat(req.body.height);

	const bmi = weight / (height * height) ;

	res.send(`Your BMI is ${bmi}`)
})

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

app.listen(2000,function () {
	console.log('Server Started to the port 2000')
})