// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================

var path = require('path');
var router = require('express').Router();

// ===============================================================================
// ROUTING
// ===============================================================================


module.exports = function(app) {

  // In each of the below cases the user is shown an HTML page of content:

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // If there are no matching routes. * This takes user back to home.

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
//  module.exports = router;
