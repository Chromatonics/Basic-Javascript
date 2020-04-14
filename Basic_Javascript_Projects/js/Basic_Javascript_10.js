function count() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "</br>" + X;
        X++
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

function string_length() {
    var str = "This is a string.";
    var n = str.length;
    document.getElementById("string").innerHTML = n;
  }

  var Rocks = ["Granite", "Slate", "Sandstone", "Basalt"];
  var Content = "";
  var Y;
  function for_loop() {
      for (Y=0; Y < Rocks.length; Y++) {
          Content += Rocks[Y] + "</br>";
      }
      document.getElementById("List_of_Rocks").innerHTML = Content;
  }

function array_function () {
  var cars = ["Saab", "Volvo", "BMW"];
  document.getElementById("array").innerHTML = cars[0];
}
  