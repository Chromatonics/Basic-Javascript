function myFunction() {
    var age, voteable;
    age = document.getElementById("age").value;
    voteable = (age < 18) ? "Too young":"Old enough";
    document.getElementById("vote").innerHTML = voteable + " to vote.";
  }

  function adding() {
    document.getElementById("nested_function").innerHTML = add();
    function add() {
      var counter = 100;
      function plus() {counter += 1;}
      plus();  
      return counter; 
    }
    }

    var person = {
      firstName: "My",
      lastName : "Name",
      fullName : function() {
        return this.firstName + " " + this.lastName;
      }
    };
    
    function new_function() {
    document.getElementById("new_and_this").innerHTML = person.fullName();
    }
    
class Mineral {
  constructor(Type, Color, Mohs) {
    this.Mineral_Type = Type;
    this.Mineral_Color = Color;
    this.Mineral_Mohs = Mohs;
  }
}

var Quartz = new Mineral("Silicate", "Clear", "7");
function myFunction_new() {
  document.getElementById("demo").innerHTML =
  `Quartz is a ${Quartz.Mineral_Color}-colored ${Quartz.Mineral_Type} of hardness${Quartz.Mineral_Mohs}`;
}