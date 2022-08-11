function init()
{
    let stars = document.getElementById("stars");
    let moon = document.getElementById("moon")
    let mountains_behind = document.getElementById("mountains_behind");
    window.addEventListener("scroll",function(){
        let value = this.window.scrollY;
        stars.style.left= value*0.5+ 'px';
        moon.style.top=value*0.6+ 'px';
        mountains_behind.style.top=value*0.5 +'px'

    })
}
$(document).ready(function() {
    $(".main").hide();
    $(".section").hide();
    $("footer").hide();
    $(".container-scan").show(function() {
        setTimeout(function() {
            $(".container-scan").hide()
            $(".main").show()
            $(".section").show();
            $("footer").show();

        },4500)
        
    })

    


})

   
