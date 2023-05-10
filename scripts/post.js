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

