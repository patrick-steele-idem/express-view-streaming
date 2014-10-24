var express = require('express');

var app = express();

// Use the middleware for the index page located in a separate module
app.get('/', require('./src/pages/index'));

app.listen(8080, function(err) {
    if (err) {
        throw err;
    }

    console.log('Server listening on port 8080');
    console.log('Try:');
    console.log('http://localhost:8080/');
})

