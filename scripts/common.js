// for Sign_up link
function Sign_up() {
  // Get the sign-up modal element
  var modal1 = document.getElementById("myModal1");
  // Get the sign-in modal element
  var modal2 = document.getElementById("myModal2");
  // Hide or disable the sign-in modal
  modal2.style.display = "none";  
  // Show the sign-up modal
  modal1.style.display = "block";
}
// when one modal open then two gone block
function function1() {
  // Get the modal elements
  var modal1 = document.getElementById("myModal1");
  var modal2 = document.getElementById("myModal2");
  var modal3 = document.getElementById("myModal3");
  // Hide the other modals if they are open
  if (modal2.style.display == "block" || modal3.style.display == "block") {
    modal2.style.display = "none";
    modal3.style.display = "none";
  }
  // Display the first modal
  modal1.style.display = "block";
}
function function2() {
  // Get the modal elements
  var modal1 = document.getElementById("myModal1");
  var modal2 = document.getElementById("myModal2");
  var modal3 = document.getElementById("myModal3");
  // Hide the other modals if they are open
  if (modal1.style.display == "block" || modal3.style.display == "block") {
    modal1.style.display = "none";
    modal3.style.display = "none";
  }
  // Display the second modal
  modal2.style.display = "block";
}
function function3() {
  // Get the modal elements
  var modal1 = document.getElementById("myModal1");
  var modal2 = document.getElementById("myModal2");
  var modal3 = document.getElementById("myModal3");
  // Hide the other modals if they are open
  if (modal1.style.display == "block" || modal2.style.display == "block") {
    modal1.style.display = "none";
    modal2.style.display = "none";
  }
  // Display the third modal
  modal3.style.display = "block";
}
