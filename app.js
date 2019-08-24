$(function(){

    
    let header = $("#header");
    let intro = $("#intro");
    let nav = $("#nav");
    let introHeight = intro.innerHeight();
    let scrollPosition = $(window).scrollTop();
    
    // Fixed header
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

        nav.removeClass("show");
    
        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);
    });

    
    // Navigation Toggle
    let navToggle = $("#navToggle");
    navToggle.on('click', function(event){
        event.preventDefault();
        nav.toggleClass("show");
    });

    // Reviews
    let slider = $("#reviewsSlider");
    slider.slick({
        fade: true,
        arrows: false,
        dots: true
    });

});