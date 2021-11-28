function validateForm() {
    var x = document.forms["myForm"]["password"].value;
    if (x == "") {
      alert("Password must be filled out");
      return false;
    }
    else if(x == "chutiya" || x == "Chutiya" || x == "Jhatu" || x == "jhatu" || x == "pawar" || x == "siddhi" || x == "Siddhi" || x == "piddi" || x == "don"){
        return true;
    }
    else{
        alert("Incorrect Password");
        return false
    }
}