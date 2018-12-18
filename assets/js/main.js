$(document).ready(function() {
    console.log("Ready!");
    hamburgerActive = false;
    $("#hamburger").click(function(){
        $(".menu").slideToggle("fast");
        if(hamburgerActive == false){
            $("#hamburger").addClass('is-active');
            //$(".menu").css('width', '250px');
            //$("nav div.right").css('margin-right', '250px');
            hamburgerActive = true;
        }else if(hamburgerActive == true){
            $("#hamburger").removeClass('is-active');
            //$(".menu").css('width', '0px');
            //$("nav div.right").css('margin-right', '0px');
            hamburgerActive = false;
        }
    });
});