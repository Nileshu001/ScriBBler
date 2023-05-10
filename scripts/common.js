// for Sign_up link
function Sign_up() {
  var modal = document.getElementById("myModal1");
  modal.style.display = "block";
}

// when one modal open then two gone block
function function1() {
  // Get the modal elements
  var modal1 = document.getElementById("myModal1");
  var modal2 = document.getElementById("myModal2");
  var modal3 = document.getElementById("myModal3");
  // Hide the other modal if it is open
  if (modal2.style.display == "block" || modal3.style.display == "none") {
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
// Hide the other modal if it is open
  if (modal1.style.display == "block" || modal3.style.display == "none") {
    modal1.style.display = "none";
    modal3.style.display == "none";
  }
// Display the second modal
  modal2.style.display = "block";
}

// for close button
var closeBtn1 = document.querySelector(".Sign_up_modal .close");
var closeBtn2 = document.querySelector(".Sign_in_modal .close");
var closeBtn3 = document.querySelector(".create_Post_modal .close");
var closeBtn4 = document.querySelector(".modal3 .close");


// Add event listener to close button for each modal
closeBtn1.addEventListener("click", function() {
  var modal1 = document.getElementById("myModal1");
  modal1.style.display = "none";
});

closeBtn2.addEventListener("click", function() {
  var modal2 = document.getElementById("myModal2");
  modal2.style.display = "none";
});

closeBtn3.addEventListener("click", function() {
  var modal3 = document.getElementById("myModal3");
  modal3.style.display = "none";
});

closeBtn4.addEventListener("click", function() {
  var modal3 = document.getElementById("myModal3");
  modal3.style.display = "none";
});

function Sign_up() {
  var modal = document.getElementById("myModal1");
  modal.style.display = "block";
}
