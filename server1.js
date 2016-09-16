var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
var todos =[{
	id:1,
	description:'Hiii Revathi',
	completed:false
},{
	id:2,
	description:'How are you?',
	completed:false
}, {
	id:3,
	description:'What are u doing?',
	completed:true
}];

app.get('/', function(req, res){
	res.send('Todo API Root');
});

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

app.listen(PORT, function(){
	console.log(' Express Listening on port ' + PORT + '!!');
});