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

    $("header").hide();

    $(".main").hide();
    $(".section").hide();
    $("footer").hide();
    

    $(".container-scan").show(function() {
        setTimeout(function() {
            $(".container-scan").hide()
            $(".main").show()
            $(".section").show();
            $("footer").show();
            $("header").show();


        },4500)
        

    })

    $(".upcoming-phone").addClass("c4-izmir c4-border-bottom-left c4-image-rotate-right c4-gradient-bottom-right")
    $("figcaption").addClass("c4-layout-bottom-left");
    
    
    var today = new Date();

    var day = today.getDate();
    var month = (today.getMonth() + 1);
    var year = today.getFullYear();

    var n = (day + 2 * month + (3 * (month + 1)) / 5 + year + (year / 4)) % 7
    n = Math.round(n);
    n = parseInt(n);
    if (n == 7 || n == 0)
        n = 'Saturday'
    if (n == 1)
        n = 'Sunday'
    else if (n == 2)
        n = 'Monday'
    else if (n == 3)
        n = 'Tuesday'
    else if (n == 4)
        n = 'Wednesday'
    else if (n == 5)
        n = 'Thursday'
    else if (n == 6)
        n = 'Friday'




    if (month == 1)
        month = 'January'
    else if (month == 2)
        month = 'February'
    else if (month == 3)
        month = 'March'
    else if (month == 4)
        month = 'April'
    else if (month == 5)
        month = 'May'
    else if (month == 6)
        month = 'June'
    else if (month == 7)
        month = 'July'
    else if (month == 8)
        month = 'August'
    else if (month == 9)
        month = 'September'
    else if (month == 10)
        month = 'October'
    else if (month == 11)
        month = 'November'
    else if (month == 12)
        month = 'December'


    var d1 = document.querySelectorAll('.day');

   
        var date1 = month + ' ' + day + ' ' + year
       
    $(".day").html(date1);

     //Go to top
     $("#gototop").hide();
     $(window).scroll(function(){
         if($(this).scrollTop() >=344 )
         $("#gototop").show("slow");
         else
         $("#gototop").hide("slow");
 
 
     })
     $("#gototop").click(function(){
        $("html,body").animate({
            scrollTop:0
        },2000)
    })
})

   
