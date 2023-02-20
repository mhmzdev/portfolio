$(document).ready(function () {
    // For Scroll to Top Animation
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