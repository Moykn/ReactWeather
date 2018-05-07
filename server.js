var express = require('express'),
    port = process.env.PORT || 3000,
    //morgan = require('morgan'),
    path = require('path'),
    app = express();

// Create our app
var app = express();

//app.use(express.static('node_modules/uikit/'));
app.use('/css',express.static(path.resolve(__dirname, 'node_modules/uikit/dist/css')));
app.use('/js',express.static(path.resolve(__dirname, 'node_modules/uikit/dist/js')));
app.use('/dist',express.static(path.resolve(__dirname, 'dist')));
app.use(express.static('public'));


app.listen(3000, function () {
  console.log('Express server is up on port 3000');
});