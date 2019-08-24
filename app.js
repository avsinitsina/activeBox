$(function(){

    // Fixed header
    let header = $("#header");
    let intro = $("#intro");
    let introHeight = intro.innerHeight();
    let scrollPosition = $(window).scrollTop();

    checkScroll(scrollPosition, introHeight);
    $(window).on('scroll resize', function(){
        introHeight = intro.innerHeight();
        scrollPosition = $(this).scrollTop();

        checkScroll(scrollPosition, introHeight)
    });

    function checkScroll(scrollPosition, introHeight){
        if(scrollPosition > introHeight) header.addClass("fixed");
        else header.removeClass("fixed");
    }
    
    // Smooth scroll
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        console.log(elementOffset);
    
        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);
    });

    // 
});