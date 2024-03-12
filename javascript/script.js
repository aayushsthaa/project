//js for footer
function notify() {
  var input = document.getElementById("email").value;
  if (input == "") {
    alert("Please type a valid email address");
  } else {
    alert(
      "Thank you for subscribing to email, we will shortly mail you with all the details"
    );
  }
}
