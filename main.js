function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function isNumber(number) {
  var regex = /([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})/;
  return regex.test(number);
}

$("#signUpButton").click(function () {
  var errorMessage = "";
  if (isEmail($(".emailInput").val()) == false) {
    errorMessage = "The email address is not valid";
    alert(errorMessage);
  } else if ($(".emailInput").val() == "") {
    //Why is this not working?
    alert(
      "How did you expect this to work without entering your email address?"
    );
  }

  if (isNumber($(".telephoneInput").val()) == false) {
    alert("Enter your parents phone number or memorize your phone number");
  }

  if ($(".passwordInput").val() != $(".confirmPasswordInput").val()) {
    alert("The passwords do not match");
  }
});
