var express = require("express")
 
var app = express()
            .use(express.static(__dirname))
						.use(express.bodyParser());
 
var port = process.env.PORT || 4000;
app.listen(port);
console.log("Started server on port " + port);
  
app.post('/', function(req, res){
	console.log('posted' + req.body)
	res.end();
});
 
app.get('/', function(){
	console.log('got' + req.body)
	res.end()
});