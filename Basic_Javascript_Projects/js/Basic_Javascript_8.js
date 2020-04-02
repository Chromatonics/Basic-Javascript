function Full_Sentence () {
    var part_1 ="I have";
    var part_2 ="made this";
    var part_3="into a";
    var part_4="whole sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

function slice_method () {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("slice").innerHTML = Section;
}

function myFunction() {
    var str = "Hello World!";
    var res = str.toUpperCase();
    document.getElementById("demo").innerHTML = res;
  }

  function search() {
    var str = "This is a Grandma!"; 
    var n = str.search("Grandma");
    document.getElementById("find").innerHTML = n;
  }

  function string_method () {
      var X=182;
      document.getElementById("Num_to_String").innerHTML=X.toString();
  }

  function precision_Method () {
      var X= 12968.98765371028983297
      document.getElementById("Precision").innerHTML=X.toPrecision(10);
  }

  function fixed() {
    var num = 103.19204807203489;
    var n = num.toFixed(4);
    document.getElementById("fix").innerHTML = n;
  }

  function values() {
    var str = "The String.";
    var res = str.valueOf();
    document.getElementById("value").innerHTML = res;
  }