document.addEventListener('DOMContentLoaded', function() {
    let typed = new Typed(".print-text", {
        strings: [ "Social Marketing", "Email Marketing", "Media Management", "S E O",  " GOOGLE AD"],
        typeSpeed: 60,
        loop: true
    });
});

document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});
///////
