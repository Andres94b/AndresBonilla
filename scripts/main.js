import './../scss/main.scss';
import MyImage from './../assets/images/profile_pic.jpg';
import MyPDF from './../assets/documents/CV_Andres_Bonilla_E.pdf';



document.addEventListener('DOMContentLoaded',()=>{
    const app = document.getElementById('app');

    const imgElement = document.createElement('img');
    const imgDiv = document.getElementsByClassName('profile_pic')[0];
    imgElement.src = MyImage;
    imgElement.alt = 'My Webpack Image';

    imgDiv.appendChild(imgElement);

});

$(document).ready(function(){
    $( "#linkedin-btn" ).on( "click", function() {
        window.open("https://www.linkedin.com/in/andres-bonilla-07/")
    } );
    $( "#github-btn" ).on( "click", function() {
        window.open("https://github.com/Andres94b")
    } );
    $( "#instagram-btn" ).on( "click", function() {
        window.open("https://www.instagram.com/andrub7/")
    } );
    $( "#download-btn" ).on( "click", function(e) {
        if (confirm('Download Resume?')) {
            e.preventDefault();
            window.open(MyPDF);
        } 
    } );
})


