const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

//here's our data for users
var data = require('./data/test.json');

app.get('/', (req, res) => {
  var title = 'Home Page';
  res.render('pages/index', { 'title': title });
});

app.get('/plants', (req, res) => {
  var title = 'Plants';
  res.render('pages/plants', { 'title': title });
});

app.get('/crochet', (req, res) => {
  var title = 'Crocheting';
  res.render('pages/crochet', { 'title': title });
});

app.get('/snowboarding', (req, res) => {
  var title = 'Snowboarding';
  res.render('pages/snowboarding', { 'title': title });
});

//users index is our list page
app.get('/users', function(req, res) {
	var title = 'Users Page';
	res.render('users/index', {
    	title: title,
    	users: data
	});
});

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 res.render('users/view', {
     title: title,
     user: data[--id]
 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(data);
});