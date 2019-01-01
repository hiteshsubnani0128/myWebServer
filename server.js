const express = require('express');
const hbs = require('hbs');
var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) =>{
	res.render('index.hbs',{
		name : 'Hitesh',
		currentYear : new Date().getFullYear(),
		welcomeMessage : 'Welcome to my website'
	});
});

app.get('/about', (req, res) =>{
	res.render('about.hbs', {
		pageTitle : 'About Page',
		currentYear : new Date().getFullYear()
	});
});

app.listen(3000, () =>{
	console.log('Server is up at Port 3000');
});
