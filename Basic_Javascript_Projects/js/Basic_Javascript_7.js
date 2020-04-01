var X = 10;
function Add_numbers_1() {
    document.write(20 + X);
}
function Add_numbers_2() {
    var Y= 5;
    document.write(100 + X + Y);
}
function Add_numbers_3() {
    console.log(35 + X);
}
Add_numbers_1();
Add_numbers_2();
Add_numbers_3();

function get_Date () {
    if (new Date() .getHours() <18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function myFunction() {
    var x, text;
  
    x = document.getElementById("numb").value;
     
    if (isNaN(x) || x < 1 || x > 5) {
      text = "No...";
    } else {
      text = "Good!";
    }
    document.getElementById("demo").innerHTML = text;
  }

  function day_night() {
    var time = new Date().getHours();
    var greeting;
    if (time < 12 == time > 0) {
      greeting = "It is morning";
    } else if (time > 12 == time < 18) {
      greeting = "It is day";
    } else {
      greeting ="It is night";
    }
  document.getElementById("time_zone").innerHTML = greeting;
  }