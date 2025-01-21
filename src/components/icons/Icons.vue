<template>
    <div class="icons">
        <i id="linkedin-btn" class="fa-brands fa-linkedin fa-3x"></i>
        <i id="github-btn" class="fa-brands fa-github fa-3x"></i>
        <i id="instagram-btn" class="fa-brands fa-instagram fa-3x"></i>
    </div>
    <!-- midnight forest palette https://piktochart.com/tips/black-green-yellow-color-palette -->
</template>
<style>
    .icons{
        display: inline-block;
    }
    .icons i{
        margin-right: 50px;;
    }
    i:hover{
        color: #D2E600;
        
    }
</style>
<script>
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
    })
    
</script>
