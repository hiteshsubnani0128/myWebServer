const express = require('express');
const hbs = require('hbs');
var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) =>{
	res.send('Hello my app');
});

app.get('/about', (req, res) =>{
	res.send('This is my about page');
});

app.listen(3000, () =>{
	console.log('Server is up at Port 3000');
});
