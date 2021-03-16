require('dotenv').config();//env can cuse a file to be hidden
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection
    .on('open', () => {
        console.log('Mongoose connection open');
    })
    .on('error', (err)=> {
        console.log(`Connection error: ${err.message}`);
    });

require('./models/Registration');
const app = require('./app'); //importing the Express app we created in app.js.

const server = app.listen(3000, function(){
    console.log(`Express is running on port ${server.address().port}`);
})
// const server = app.listen(3000,() => { 
//     console.log('Express is running on port ${server.address().port');
