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
function function1() {
  // Get the modal elements
  var modal1 = document.getElementById("myModal1");
  var modal2 = document.getElementById("myModal2");
  var modal3 = document.getElementById("myModal3");
  // Hide the other modal if it is open
  if (modal2.style.display == "block" || modal1.style.display == "none") {
    modal2.style.display = "none";
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
  if (modal1.style.display == "block" || modal2.style.display == "none") {
    modal1.style.display = "none";
  }
// Display the second modal
  modal2.style.display = "block";
}

   // post edit code 
// Get the necessary elements from the HTML
const title = document.getElementById('post-title');
const text = document.getElementById('post-text');
const editBtn = document.getElementById('edit-btn');
const saveBtn = document.getElementById('save-btn');
// Add event listener to the edit button
editBtn.addEventListener('click', function() {
  // Make the title and text editable
  title.contentEditable = true;
  text.contentEditable = true;

  // Hide the edit button and show the save button
  editBtn.style.display = 'none';
  saveBtn.style.display = 'inline-block';
});

// Add event listener to the save button
saveBtn.addEventListener('click', function() {
  // Save the updated title and text
  // You can replace this code with your own implementation to save the data to your backend

  // Make the title and text non-editable again
  title.contentEditable = false;
  text.contentEditable = false;

  // Hide the save button and show the edit button
  saveBtn.style.display = 'none';
  editBtn.style.display = 'inline-block';
});

function addComments(id){
    var addEventName = id.value +'<br>';
    var a = document.getElementById('userComments');
    document.getElementById('addEventNames').innerHTML += '<div class="comments"><p3>'+addEventName+'</p3></div>';          
    a.value=a.defaultValue;
}
var numberOfClicks=0;
function postLiked(){
    document.getElementById("likeBlog").innerHTML = '<i class="bi bi-hand-thumbs-up-fill" id="like_Btn"></i> Liked';
    numberOfClicks += 1;
    if(numberOfClicks!=0){
        if (numberOfClicks==1){
            document.getElementById('likeCount').innerHTML = numberOfClicks + " person likes this!";
        }
        else {
            document.getElementById('likeCount').innerHTML = numberOfClicks + " people have liked this";
        }
        }
    }
    // for close button
var closeBtn1 = document.querySelector(".Sign_up_modal .close");
var closeBtn2 = document.querySelector(".Sign_in_modal .close");
// Add event listener to close button for each modal
closeBtn1.addEventListener("click", function() {
  var modal1 = document.getElementById("myModal1");
  modal1.style.display = "none";
});
closeBtn2.addEventListener("click", function() {
  var modal2 = document.getElementById("myModal2");
  modal2.style.display = "none";
});
