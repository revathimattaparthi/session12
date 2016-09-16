var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 8080;
var categoryNextId = 1;
categories =[];

app.get('/', function(req, res){
	res.send('Categories API Root');
});
 app.use(bodyParser.json());
// get/todos
app.get('/categories', function(req, res){
	res.json(categories);
});

// get/todo/:id

app.get('/categories/:id', function(req, res){

	var categoriesId = req.params.id;
	var matchedobj;

	categories.forEach(function (category){
		if(parseInt(categoriesId) === category.id){
			matchedobj = category;
		}
	});
	 if(matchedobj){
	 	res.json(matchedobj);
	 } else {
	 	res.status(404).send();
	 }
});

app.post('/categories', function(req, res){
	var body = req.body;
	 body.id = categoryNextId++;
	categories.push(body);
	res.json(body);

});

app.listen(PORT, function(){
	console.log(' Express Listening on port ' + PORT + '!!');
});