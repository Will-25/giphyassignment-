var animals = [];


 function createbutton() {
    
   
   for(i = 0; i < animals.length; i++) {
    var a = ("<button id='newbutton'>")
    
    $("#newbutton").text(animals[i])
    $("#buttonbox").prepend(a);
   }
 }


$("#submit").on("click", function (event) {
    var input = $("#search").val().trim();
    $("#buttonbox").empty();
    event.preventDefault();
    
   animals.push(input)
   createbutton();
   console.log(animals)
  
});

