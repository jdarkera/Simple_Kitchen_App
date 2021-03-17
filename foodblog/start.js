const app = require('./app'); //importing the Express app we created in app.js.
const port = 3000; 
const server = app.listen(port, function(){//This can be done in app.js without having a separate file here
    console.log(`Express is running on port ${server.address().port}`);
})

// var express = require('express');
// var path = require('path');
// var app = express();

// app.get('/components', function (req, res){
//     res.render('content', {title:"Food Blog"}); 
// })

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// app.use(express.static(path.join(__dirname, 'public')));

// app.listen(4000);