//display all current notes

$.get("/api/notes", function(data) {

  $("#noteList").html("");

    for (var i = 0; i < data.length; i++) {

      var note = $("<li class='list-group-item'>");

      var row = $("<div>");
      var title = $("<span class='font-weight-bold saved-note-title'>" + result[i].title + "</span>");
      var editNote = $("<a href= '#top'><i class='fas fa-pen float-right text-danger edit-note' data-id= " + result[i].id + ">")
      var deleteNote = $("<i class='fas fa-trash-alt float-right text-danger delete-note' data-id= " + result[i].id + ">")
      var bodyOfNote = $("<p class='mt-2'>" + result[i].text + "</p>");
      var timeConverter = moment(result[i].created_at).format("YYYY-MM-DD HH:mm:ss");
      var timeStamp = $("<p>" + timeConverter + "</p>");
      div.append(title, deleteNote, editNote);
      note.append(row, bodyOfNote, timeStamp);
      $("#noteList").prepend(note);

    

  }

});

//create new note

$("#saveNoteBtn").on("click", function(event) {
  event.preventDefault();

  // Make a newChirp object
  var newNote = {
    title: $("#noteTitle").val().trim(),
    bodyOfNote: $("#noteBody").val().trim(),
  };

  $("#noteTitle").val("");
  $("#noteBody").val("");

    $.post("/api/notes", newNote).then(function(err){
        if (err) throw err
    });
    location.reload();
 
  });

$.post("/api/new", newNote)
    // On success, run the following code
    .then(function() {

      var row = $("<div>");
      row.addClass("note");

      row.append("<p>" + newNote.title + "</p>");
      row.append("<p>" + newNote.bodyOfNote + "</p>");

      $("#noteList").prepend(row);

    });


//You need ajax to delete 

// create a function to delete the clicked note

$(document.body).on("click", ".delete-note", function(){
  var id = $(this).data("id");
  $.ajax("/api/notes/" + id, {
      type: "DELETE"
  }).then(function(err){
      if (err) throw err
  });
  location.reload();
}); 

//Edit update new note

$(document.body).on("click", ".edit-note", function(){
  console.log("edit click function: " + true);
  var id = $(this).data("id");
  console.log(id);
  $.ajax("/api/notes/" + id, {
      type: "GET"
  }).then(function(result){
 
      $("#noteTitle").attr("value", result[0].title);
      $("#noteBody").text(result[0].text);
      $(".btn").attr("class", "btn btn-success mt-4 float-right add-edited-note").attr("data-id", id);
      console.log('add button', $('.add-edited-note'));
  });
});



$(".add-edited-note").on("click", function(event){
    
  event.preventDefault();
  
  var id = $(this).data("id");

  //Store input data in variables
  var editNote = {
      noteTitle: $("#noteTitle").val().trim(),
      noteText: $("#noteBody").val().trim()
  };
  
  console.log(editNote);
  $("#noteTitle").val("");
  $("#noteBody").val("");

  $.ajax("/api/notes/" + id, {
      type: "PUT",
      data: editNote
  }).then(function(err){
      if (err) throw err;
  });
  location.reload();
});


// create a function to render the list of notes and read all notes from the database

// create a function to save (post) a new note

