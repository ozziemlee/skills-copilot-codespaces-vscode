// Create web server
// Access: http://localhost:3000/comments

// Import express module
var express = require('express');
// Create an express object
var app = express();

// Create a router object
var router = express.Router();

// Set the route path & initialize the API
router.get('/', function(req, res) {
    res.json({ message: 'Welcome to the comments API!' });
});

// Export the router
module.exports = router;