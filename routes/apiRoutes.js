// ===============================================================================
// ~  LOAD DATA  ~
// ===============================================================================
module.exports = function(router, connection){


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

  connection.query(dbQuery, [req.body.title, req.body.bodyOfNote], function(
    err,
    result
  ) {
    if (err) throw err;
    console.log('Note Successfully Saved!');
    res.end();
  });


});

router.delete("/api/notes/:id", function(req,res){

  dbQuery= "DELETE FROM notes WHERE id = " + req.params.id

  connection.query(dbQuery, function(
    err,
    result
  ) {
    if (err) throw err;
    console.log('Note Successfully Deleted!');
    res.end();


  
});
});
}