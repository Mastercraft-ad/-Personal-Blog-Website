// JavaScript to Handle Comment Submission and Update Comment Count

document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById('commentForm');
    const postedComments = document.getElementById('postedComments');
    const commentCount = document.getElementById('commentCount');
    let count = 0;

    commentForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission

        // Get form values
        const commentName = document.getElementById('commentName').value;
        const commentText = document.getElementById('commentText').value;

        // Create a new comment element
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `
            <h4>${commentName}</h4>
            <p>${commentText}</p>
        `;

        // Add the new comment to the posted comments section
        postedComments.appendChild(commentElement);

        // Increment the comment count and update the display
        count++;
        commentCount.textContent = `Comments: ${count}`;

        // Clear form fields
        commentForm.reset();
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Load header
    fetch('/pages/header.html')
        .then(response => response.text())
        .then(data => document.getElementById('header').innerHTML = data)
        .then(() => attachMenuToggleHandlers());

    // Load footer
    fetch('/pages/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer').innerHTML = data);
});
