document.addEventListener("DOMContentLoaded", function() {
    const postLinks = document.querySelectorAll('.post-link');
    postLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.classList.add('animated');
        });
        link.addEventListener('mouseleave', () => {
            link.classList.remove('animated');
        });
    });
});
