$(document).ready(function () {



  var animals = [];
  
  
  function createbutton() {

    $("#buttonbox").empty();
    for (var i = 0; i < animals.length; i++) {
      var a = $("<button id='newbutton'>")
      $("#buttonbox").prepend(a);
      a.attr("data-name", animals[i])
      a.text(animals[i])
       }
  };



  $("#submit").on("click", function (event) {

    var input = $("#search").val().trim();
    if (input === "") { }  else {
    animals.push(input)
    createbutton();
    event.preventDefault();
    $("#search").val("");







}});

$("#buttonbox").on("click", "#newbutton", function() {
  console.log("fuck")
 $("#giphs").empty();
var animal = $(this).attr("data-name")

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
animal + "&api_key=Ei0hI5Lo4ZSiZ5wWbYcuCqENZ5xH4REJ&limit=10";


$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response){
  var result = response.data;

  for(var i = 0; i < result.length; i++) {
  var giphBox = $("<div>")
  var p = $("<p>").text("Rating: " + result[i].rating);
  var animalImage = $("<img id='giphsize'>");
  animalImage.attr("src", result[i].images.fixed_height.url);
  giphBox.append(p);
  giphBox.append(animalImage);
  $("#giphs").prepend(giphBox);
}
  







});
});

});


// wire up buttons to call to API
// set on click event for button to display gifs 
// 
// 
//