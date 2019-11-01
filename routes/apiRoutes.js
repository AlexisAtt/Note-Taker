// ===============================================================================
// ~  LOAD DATA  ~
// ===============================================================================


var router = require('express').Router();
var connection = require('note_db');

// ===============================================================================
//   ~  Routing  ~
// ===============================================================================


router.get('/notes', function(req, res) {
  res.json(tableData);
});

// ===============================================================================
//   ~  POST  ~
// ===============================================================================



router.post('/notes', function(req, res) {
  tableData.push(req.body);
  res.json(true);
});

// DELETE deletes the note with an id equal to req.params.id
// https://expressjs.com/en/4x/api.html#app.delete.method
router.delete('/path/name/here', function(req, res) {
  // TODO: Create connection query to delete a note from MySQL database by the provided `id` parameter
  // https://www.npmjs.com/package/mysql#performing-queries
});

module.exports = router;
