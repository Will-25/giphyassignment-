$(document).ready(function () {



  var animals = [];


  function createbutton() {

    $("#buttonbox").empty();
    for (var i = 0; i < animals.length; i++) {
      var a = $("<button id='newbutton' class='btn btn-danger'>")
      $("#buttonbox").prepend(a);
      a.attr("data-name", animals[i])
      a.text(animals[i])
    }
  };



  $("#submit").on("click", function (event) {

    var input = $("#search").val().trim();
    if (input === "") { } else {
      animals.push(input)
      createbutton();
      event.preventDefault();
      $("#search").val("");







    }
  });

  $("#buttonbox").on("click", "#newbutton", function () {


    $("#giphs").empty();
    var animal = $(this).attr("data-name")

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=Ei0hI5Lo4ZSiZ5wWbYcuCqENZ5xH4REJ&limit=5";




    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      var result = response.data;

      for (var i = 0; i < result.length; i++) {
        var giphBox = $("<div>")
        var p = $("<p>").text("Rating: " + result[i].rating);
        var animalImage = $("<img id='giphsize'>");
        animalImage.attr("src", result[i].images.original_still.url);
        animalImage.attr("data-state", "still");
        animalImage.attr("data-still", result[i].images.original_still.url);
        animalImage.attr("data-animate", result[i].images.fixed_height.url);

        giphBox.append(p);
        giphBox.append(animalImage);
        $("#giphs").prepend(giphBox);

        $("#giphsize").on("click", function () {

          var state = $(this).attr("data-state");

          if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }
        });
      }







    });

  });

});


