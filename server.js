var express = require('express');
var connection = require("./data/connection.js");
// TODO: Import your route files from `route/`

// Initialize the app and create a port
var app = express();
var PORT = process.env.PORT || 3000;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// TODO: Mount your HTML and API routes
require("./routes/apiRoutes")(app, connection);
require("./routes/htmlRoutes")(app);

// Start the server on the port
app.listen(PORT, function() {
  console.log('Listening on PORT: ' + PORT);
});
