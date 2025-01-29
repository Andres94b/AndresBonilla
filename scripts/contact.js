import './../scss/contact.scss';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if(form){
        form.addEventListener('submit', (e) =>{
            e.preventDefault();
            alert('success');
        });
    }
    

    const callCard = document.getElementById('call-card');
    const emailCard = document.getElementById('email-card');
    const messageCart = document.getElementById('text-card');
    
    callCard.addEventListener('click',()=>{
        window.open("tel:4383659614");
    });

    emailCard.addEventListener('click',()=>{
        window.open("mailto:andres94b@gmail.com");
    });

    messageCart.addEventListener('click',()=>{
        window.open("https://wa.me/14383659614");
    });
    
});
