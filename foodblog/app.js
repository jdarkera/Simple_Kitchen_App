const express = require('express');
const path = require('path'); //need it to connect to Views directory
const routes = require('./public/routes/index');


const app = express();

// const bodyParser = require('body-parser'); //to retrieve whatever data the user has submitted via the form
app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views')); //build the path to our views folder using its join method and __dirname
app.set('view engine', 'pug'); //determine the type of template

// app.use(bodyParser.urlencoded({extended: true}));

// app.use('/', routes);


// module.exports = app;

// var express = require('express');
// var path = require('path');
// var app = express();

// app.set('views', path.join(__dirname, 'views')); 
// app.set('view engine','pug');

app.get('/components', function(req, res) {
    res.render('content');
});


// app.listen(3000); 
module.exports = app;

