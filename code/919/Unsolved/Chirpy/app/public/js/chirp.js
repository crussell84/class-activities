// *********************************************************************************
// TO DO:
// 1. Display all chirps on page load
// 2. Add new chirp to database and prepend to existing chirps
// *********************************************************************************

// When the page loads, grab and display all of our chirps


// When user chirps
$(".newChirp").on("click", function(event){
    event.preventDefault();
    var author = $(".chirpAuthor").val().trim();
    var text = $(".chirpText").val().trim();

    var newChirp = {author: author, text: text};

    $.ajax("/api/new", {
        type: "POST",
        data: newChirp
    }).then(function(){
        console.log("New chirp recorded!");
        location.reload();
    })

})