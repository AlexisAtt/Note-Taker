// get the note data from the inputs, save it to the db and update the view

function appendNewNote() {

    $.ajax({ url: "/api/notes", method: "GET" })
      .then(function(listData) {

        console.log(listData);


        // Looping through all notes:
        for (var i = 0; i < listData.length; i++) {

          // Dynamically add new note
          var addNote = $("#noteList");

          // Display Note text (or body of text for note)
          var bodyOfNote = $("<li class='list-group-item mt-4'>");

          bodyOfNote.append(

            $("<h2>").text("Note Title:  " + listData[i].customerID),
            $("<h2>").text("Body of Note:" + listData[i].customerName),

          );

          addNote.append(bodyOfNote);
        }
      });
  }

//You need ajax to delete 

// create a function to render the list of notes and read all notes from the database

// create a function to save (post) a new note

// create a function to delete the clicked note
