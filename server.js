'use strict'

 const express = require('express');

 const app = express();

 app.get('/',function (request,response) {
 	response.send('<h1>Hello World</h1>');
 });

 app.get('/contact',function (request,response) {
 	response.send('<h1>balag0414@gmail.com</h1>');
 })

  app.get('/about',function (request,response) {
 	response.send(`<div>
 		<h1>Bio Data</h1>
 		Name : Balaguru,<br>
 		Age  : 23,<br>
 		Ph.no: 9360172760,<br>
 		Language known : Tamil,english,<br>
 		
 		</div>`);
 })

 app.get('/hobbies',function (request,response) {
 	response.send(`<h1>My Hobbies </h1><ul>playing chess</ul><ul>learning Programs</ul><ul>listening Music</ul>`);
 })


 app.listen(3000,function () {
 	console.log('Server Started')
 });