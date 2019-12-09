// ===============================================================================
// ~  LOAD DATA  ~
// ===============================================================================
module.exports = function(app, connection){
// // ===============================================================================
// //   ~  Routing  ~
// // ===============================================================================

router.get("/api/notes", function(req, res){

  var dbQuery = 'SELECT * FROM notes';

  connection.query(dbQuery, function(err, result) {
    if (err) throw err;
    res.json(result);

})
});

router.post("/api/notes", function(req,res){
  console.log(req.body);

  var dbQuery = 'INSERT INTO notes (title, bodyOfNote) VALUES (?,?)';

  connection.query(dbQuery, [req.bodyofNote.title, req.bodyofNote.bodyofNote], function(
    err,
    result
  ) {
    if (err) throw err;
    console.log('Note Successfully Saved!');
    res.end();
  });


});

router.delete("/api/notes/:id", function(req,res){

});
}
/*


/*module.exports = function(app) {
  app.get('/api/all', function(req, res) {
    var dbQuery = 'SELECT * FROM notes';

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

}
// router.get('/api/notes', function(req, res) {
// var dbQuery = "SELECT * FROM notes";
//   connection.query(dbQuery, function(err, result){
//     if (err) throw err;
//     res.json(result);
// })
// });

// // ===============================================================================
// //   ~  POST  ~
// // ===============================================================================

// router.post('/api/notes', function(req, res) {
// console.log("Note Data:")
// console.log(req.bodyOfNote);

// });
// // DELETE deletes the note with an id equal to req.params.id
// // https://expressjs.com/en/4x/api.html#app.delete.method
// router.delete('/api/notes/:id', function(req, res) {
//   connection.query("DELETE FROM notes WHERE id = ?", [req.params.id], function(err, result) {
//     if (err) {
//       // If an error occurred, send a generic server failure
//       return res.status(500).end();
//     }
//     else if (result.affectedRows === 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     }
//     res.status(200).end();

//   });
// });

//module.exports = router;

*/

