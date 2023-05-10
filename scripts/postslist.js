function delect() {
    // Get the modal element
    var modal = document.getElementById("myModal3");

    // Get the Yes and No buttons inside the modal
    var yesBtn = modal.querySelector("#Yes");
    var noBtn = modal.querySelector("#No");

    // Display the modal
    modal.style.display = "block";

    // Add click event listeners to the Yes and No buttons
    yesBtn.addEventListener("click", function() {
        // Code to execute if the user clicks the Yes button
        console.log("Delete confirmed");
        // Close the modal
        modal.style.display = "none";
    });

    noBtn.addEventListener("click", function() {
        // Code to execute if the user clicks the No button
        console.log("Delete canceled");
        // Close the modal
        modal.style.display = "none";
    });
}
// for close button
var closeBtn1 = document.querySelector(".Sign_up_modal .close");
var closeBtn2 = document.querySelector(".Sign_in_modal .close");
var closeBtn3 = document.querySelector(".modal3 .close");
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
