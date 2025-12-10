$(document).ready(function () {

    // aos (animate on scroll)
    AOS.init();

    // navbar toggling
    $('#navbar-toggler').click(function () {
        $('.navbar-collapse').slideToggle();
    });

    // navbar background change in scroll
    $(window).scroll(function () {
        let position = $(window).scrollTop();
        if (position >= 80) {
            $('.navbar').addClass('bg-navbar');
        } else {
            $('.navbar').removeClass('bg-navbar');
        }
    });

    // smooth scroll
    let links = $('.navbar-nav a.nav-link');
    links.click(function (e) {
        e.preventDefault();
        let target = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 700);
    });


    // popup gallery 
    $(document).ready(function () {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function (item) {
                    return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                }
            }
        });
    });

    // slick slider 
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    //filter
    $(document).ready(function () {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    });

})