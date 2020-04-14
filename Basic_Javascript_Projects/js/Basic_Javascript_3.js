function myFunction(c1, c2) {
    return c1 + c2;
  }
  document.getElementById("demo").innerHTML = myFunction(3, 3);
  
  function myFunction_1(p1, p2) {
    return p1 - p2;
  }
  document.getElementById("math").innerHTML = myFunction_1(4, 3);
  
  function myFunction_2(p1, p2) {
    return p1 * p2;
  }
  document.getElementById("multiply").innerHTML = myFunction_2(4, 3);
  
  function myFunction_3(p1, p2) {
    return p1 / p2;
  }
  document.getElementById("divide").innerHTML = myFunction_3(4, 3);
  
  function myFunction_4(p1,p2,p3,p4,p5) {
    return p1 + p2 * p3 / p4 - p5;
  }
    document.getElementById("every").innerHTML = myFunction_4(1, 2, 10, 2, 5);
  
    function myFunction_5(p1, p2) {
      return p1 % p2;
    }
    document.getElementById("modulus").innerHTML = myFunction_5(25, 6);
  
      var x=10
    document.getElementById("unary").innerHTML = -x;
  
    var y=5;
    y++;
    document.write (y);
  
    window.alert (Math.random() *100);
  
    window.alert (Math.round(3.6));
    
  