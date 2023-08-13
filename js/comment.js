// ---> 1. Get the target and add eventListener

document.getElementById('comment-add-btn').addEventListener('click', function(){
    // ---> 2. Get value from textarea
    const newComment = document.getElementById('comment-box').value;
    // ---> 3. Set the comment
    const commentContainer = document.getElementById('comment-container');
    // Creat and Set text to a new Element
    const p = document.createElement('p');
    p.innerText = newComment;
    // append the child
    commentContainer.appendChild(p);

    // Clear the text area after add a comment
    document.getElementById('comment-box').value = '';
})