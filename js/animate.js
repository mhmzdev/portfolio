$(document).ready(function () {
    // scroll to top
    $("#up").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1500);
        return false;
    });

    // fade in's animation
    AOS.init({
        easing: "ease",
        duration: 1200,
        once: true
    });
});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 800) {
        $("#up").fadeIn();
    } else {
        $("#up").fadeOut();
    }
});

$(document).ready(function () {

    window.onscroll = function () {
        $(document).on("scroll", onScroll);

        //smooth scroll
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');

            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top + 2
            }, 1000, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    }
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#navbarMenu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navbarMenu ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });
}
