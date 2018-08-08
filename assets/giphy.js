var topics =["Harry Potter","Lord of the Rings","Stargate","Top Gun","Independence Day"];

$(document).ready(function(){

function populateButtons(){

    for (var i = 0; i < topics.length; i++) {
        var movieButton = $("<button>").addClass("button").text(topics[i]);

        $(".movies").append(movieButton);    
   
    }}
$(".movies").before(function(){

    populateButtons();

})

});


// $(".btn btn-primary").click(function(){

//     var movieTitle = document.getElementById("InputMovie").val().trim();

//     fuction (movieTitleAdd)()
//         movieTitle.push(topics);
// });