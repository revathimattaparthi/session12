var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 8080;
var todoNextId = 1;
todos =[];

app.get('/', function(req, res){
	res.send('Todo API Root');
});
 app.use(bodyParser.json());
// get/todos
app.get('/todos', function(req, res){
	res.json(todos);
});

// get/todo/:id

app.get('/todos/:id', function(req, res){

	var todoId = req.params.id;
	var matchedobj;

	todos.forEach(function (todo){
		if(parseInt(todoId) === todo.id){
			matchedobj = todo;
		}
	});
	 if(matchedobj){
	 	res.json(matchedobj);
	 } else {
	 	res.status(404).send();
	 }
});

app.post('/todos', function(req, res){
	var body = req.body;
	 body.id = todoNextId++;
	todos.push(body);
	res.json(body);

});

app.listen(PORT, function(){
	console.log(' Express Listening on port ' + PORT + '!!');
});