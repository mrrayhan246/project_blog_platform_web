document.addEventListener("DOMContentLoaded", function() {
    const postItems = document.querySelectorAll('.post-item');
    const newPostBtn = document.querySelector('.new-post-btn');

    postItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('hover');
        });
        item.addEventListener('mouseleave', () => {
            item.classList.remove('hover');
        });
    });

    newPostBtn.addEventListener('mouseenter', () => {
        newPostBtn.classList.add('hover');
    });
    newPostBtn.addEventListener('mouseleave', () => {
        newPostBtn.classList.remove('hover');
    });
});
