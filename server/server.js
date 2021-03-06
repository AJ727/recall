// NODE.JS
// The node way of importing is require (aka import blah from blah)
var path = require('path');
var express = require('express');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
// If the heroku env variable exists, use it, if not, use 3000
const port = process.env.PORT || 3000;

// Take the return value (a function) and pass it into app.use
// This serves up all assets from the public folder
app.use(express.static(publicPath));

// First arg: path (the * matches all unmatched routes)
// Second arg: function that handles the unmatched requests
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// First arg: port number
// Second arg: callback function
app.listen(port, () => {
    console.log('server is UP!');
});