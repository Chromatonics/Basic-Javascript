function myFunction_2() {
    var cat= {
     Name:"Karl", 
     Color:"Orange", 
     Weight:"10 lbs"
    };
    delete cat.Name
    document.getElementById("dictionary").innerHTML=cat.Name;
}