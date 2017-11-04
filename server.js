var express = require("express");
var path = require("path");
var bodyparser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8000;

app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, './app/public')));
//including the routing.js files into the server application and passing the app instance of express to it.
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT,function(){
	console.log("Server started on port "+PORT);
});