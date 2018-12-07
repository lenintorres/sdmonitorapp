const express = require('express')
const app = express()
const port = 4200
const listen_address = '0.0.0.0';

var ping = require('ping');

//app.get('/', (req, res) => res.send('Hello World!'))

app.get('/ping', function (req, res) {
	var host ='192.168.333.1';
	//var host = res.query.host;
	var query = req.query;
	var host = query.host;
	console.log(query);
	ping.promise.probe(host)
		.then(function(pingResponse){
		  res.send(pingResponse);
		});
})
app.listen(port, '0.0.0.0',() => console.log(`Example app listening on port ${port}!`))
