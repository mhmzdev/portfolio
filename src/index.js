/// Incase needed in future - problem with click
// $(document).scroll(function () {
//     var up = document.getElementById("up");
//     var y = $(this).scrollTop();
//     if (y > 800) {
//         up.className = "up show";
//         $("#up").fadeIn();
//     } else {
//         up.className = "up hide";
//         $("#up").fadeOut();
//     }
// });


document.addEventListener("DOMContentLoaded", function () {

    scrollToTop();
    aosInit();

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
})

function scrollToTop() {
    // scroll to top
    $("#up").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1500);
        return false;
    });

    $("#brand").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1500);
        return false;
    });

}

function aosInit() {
    // fade in's animation
    AOS.init({
        easing: "ease",
        duration: 1200,
        once: true
    });
}

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

function downloadResume() {
    window.open("https://drive.google.com/drive/u/0/folders/1E6NxJlmnW2lTYTszcbODdpXiPFYe_kBM", "_blank");
}