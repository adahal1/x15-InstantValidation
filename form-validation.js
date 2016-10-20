function submitting(){
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  window.alert(userEntered + " " + passEntered);
}

function validateUsername(){
  var userEntered = document.getElementById("user").value;
  if(userEntered.length < 6){
  //Show message that there is an error with the username...
  document.getElementById("usernameError").innerHTML="Username should be 6 characters";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.remove("has-sucess");
  document.getElementById("usernameGroup").classList.add("has-error");

}

else if (userEntered.includes(" ")){
  document.getElementById("usernameError").innerHTML="Can't contain space";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
}

else{
  document.getElementById("usernameGroup").classList.add("has-success");
  document.getElementById("usernameGroup").classList.remove("has-error")
}
}

function validatePassword(){
var userEntered = document.getElementById("user").value;
var passEntered = document.getElementById("pass").value;
if(passEntered == "password" || passEntered =="PASSWORD" || passEntered == userEntered){
  //Show message that there is an error with the password...
  document.getElementById("passwordError").innerHTML="Bad password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.remove("has-success");
  document.getElementById("passwordGroup").classList.add("has-error");
  }

  else if (passEntered.length < 6){
  document.getElementById("passwordError").innerHTML="Password must be at least 6 characters";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  document.getElementById("passwordGroup").classList.add("has-error");
  document.getElementById("passwordGroup").classList.remove("has-error");

  }

  else if (passEntered.length > 20){
  document.getElementById("passwordError").innerHTML="Password must be at least 20 characters";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  document.getElementById("passwordGroup").classList.add("has-error");
  document.getElementById("passwordGroup").classList.remove("has-error");
  }

  else{
  document.getElementById("passwordGroup").classList.add("has-success");
  document.getElementById("passwordGroup").classList.remove("has-success");
}
}