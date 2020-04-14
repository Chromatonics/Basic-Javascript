document.write(typeof 4)

function nan_function() {
    document.getElementById("test").innerHTML = 0/0; 
    }
    
    function myFunction() {
      var res = "";
      res = res + isNaN(1);
      res = res + isNaN('words');
      document.getElementById("nota").innerHTML = res;
    }
    
    document.write (3E310)
    
    document.write (-3E310)
    
    document.write (3>4)
    
    console.log (1>2)
    
    document.write ("10"+5)
    
    document.write (10==10)
    
    var A= 10;
    var B= 10;
    document.write(A===B);
    
    var A= 10;
    var B= "10";
    document.write(A===B);
    
    var A= 10;
    var B= 8;
    document.write(A===B);
    
    var A= 10;
    var B= "3";
    document.write(A===B);
    
    document.write (5>2 && 10>4)
    
    document.write (3>2 || 3>4)
    
    function not_function() {
      document.getElementById("not").innerHTML= !(20>10);
    }
