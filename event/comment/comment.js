
// 1. Get the Button access 
const getButton = document.getElementById('submit-btn')
getButton.addEventListener('click' ,function(){

    // 2. access the comment box 
    const commentTextBox = document.getElementById('text-area-comment')
    console.log(commentTextBox);


    const newComment = commentTextBox.value;
    // 3. get the Main comment box access 
    const commentContainer =document.getElementById('comment-container')
    // create a new comment field here for new comment place 
    const newCommentAdd = document.createElement('p');
    // newCommentAdd.classList.add('comment-text');
    newCommentAdd.innerText = newComment;
    commentContainer.appendChild(newCommentAdd)
    // remove the comment box text after the add new comment 
    commentTextBox.value = ''
})