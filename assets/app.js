$(document).ready(function () {



  var animals = [];
  
  

  function createbutton() {

    $("#buttonbox").empty();
    for (var i = 0; i < animals.length; i++) {
      var a = $("<button id='newbutton'>")
      $("#buttonbox").prepend(a);
      a.text(animals[i])

    }
  };



  $("#submit").on("click", function (event) {

    var input = $("#search").val().trim();
    
    

    animals.push(input)
    
    createbutton();
    event.preventDefault();
    $("#search").val("");

    


    console.log(animals)



  });
 
});