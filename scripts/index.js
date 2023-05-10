function function3() {
  // Get the modal element
  const modal = document.getElementById("myModal3");
  
  // Show the modal
  modal.style.display = "block";
  
  // Add a blur effect to the background
  const blog = document.querySelector(".blog");
  
}

// Get the close button element for each modal
var closeBtn1 = document.querySelector(".Sign_up_modal .close");
var closeBtn2 = document.querySelector(".Sign_in_modal .close");
var closeBtn3 = document.querySelector(".create_Post_modal .close");

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

