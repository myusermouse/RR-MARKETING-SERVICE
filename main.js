 document.addEventListener('DOMContentLoaded', function() {
    let typed = new Typed(".print-text", {
        strings: [ " ", "Email Marketing", "Media Management"," Social Marketing", "S E O",  " GOOGLE AD"],
        typeSpeed: 70,
        loop: true
    });
});

document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        header.style.background = /*'linear-gradient(50deg, #8FEFD9, #D488CC)'*/ '#fff';
    } else {
        header.style.boxShadow = 'none';
    }
});

/// dod click  
 let dodclicked = document.getElementById('dod-click'), 
    popUpShow = document.getElementById('clicked');
    
    dodclicked.addEventListener('click',()=>{
        popUpShow.classList.toggle('show-popup');
    })
    