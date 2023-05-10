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
