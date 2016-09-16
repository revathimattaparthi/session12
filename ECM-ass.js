var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 8080;
var productNextId = 1;
products =[];

app.get('/', function(req, res){
	res.send('Products API Root');
});
 app.use(bodyParser.json());
// get/todos
app.get('/products', function(req, res){
	res.json(products);
});

// get/todo/:id

app.get('/products/:id', function(req, res){

	var productsId = req.params.id;
	var matchedobj;

	todos.forEach(function (product){
		if(parseInt(productsId) === product.id){
			matchedobj = product;
		}
	});
	 if(matchedobj){
	 	res.json(matchedobj);
	 } else {
	 	res.status(404).send();
	 }
});

app.post('/products', function(req, res){
	var body = req.body;
	 body.id = productNextId++;
	products.push(body);
	res.json(body);

});

app.listen(PORT, function(){
	console.log(' Express Listening on port ' + PORT + '!!');
});