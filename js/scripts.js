$(document).ready(function () {


    // header-searchbox-header
    $(".tep-1").click(function () {
        $(".menu-c-search-field").css('left', '0px');
        $(".menu-c-search-field").css('opacity', '1');
    });
    $(".click-for-close").click(function () {
        $(".menu-c-search-field").css('left', '-416px');
        $(".menu-c-search-field").css('opacity', '0');
    });


    // mobile-background-cover
    $(".tep-2").click(function () {
        $(".cover-search").css({
            'opacity': '1',
            'pointerEvents': 'all',
        });
    });
    $(".close-search-box").click(function () {
        $(".cover-search").css({
            'opacity': '0',
            'pointerEvents': 'none',
        });
    });

    // mobile-menu-list
    $(".list-iconn").click(function () {
        $(".cover-mobile-back-menu").css({
            'opacity': '1',
            'pointerEvents': 'all',
        });
        $(".cover-mobile-menu").css('right', '0');
    });
    $(".close-search-box-mobile-menu").click(function () {
        $(".cover-mobile-back-menu").css({
            'opacity': '0',
            'pointerEvents': 'none',
        });
        $(".cover-mobile-menu").css('right', '-100%');
    });
    $(".cover-mobile-back-menu").click(function () {
        $(this).css({
            'opacity': '0',
            'pointerEvents': 'none',
        });
        $(".cover-mobile-menu").css('right', '-100%');
    });


    // down-tick-web-menu-list
    var ul = document.getElementById('menu-a').getElementsByTagName('ul')[0].getElementsByTagName('ul');
    var tick = '<i class="fas fa-angle-down ul-down" id="tick" ></i>';
    for (let i = 0; i < ul.length; i++) {
        ul[i].parentNode.firstChild.innerHTML = ul[i].parentNode.firstChild.innerHTML + tick;
    }

    // down-tick-mobile-menu-list
    var ul_mobile = document.getElementById('mobile-menu-cover').getElementsByTagName('ul')[0].getElementsByTagName('ul');
    var tick_mobile = '<span class="ul-down-span"><i class="fas fa-angle-down ul-down-span i-down-span"></i></span>';
    for (let i = 0; i < ul_mobile.length; i++) {
        $(ul_mobile).slideUp();
        ul_mobile[i].parentNode.innerHTML = tick_mobile + ul_mobile[i].parentNode.innerHTML;
    }
    $('.ul-down-span').click(function () {
        $(this).next().next().slideToggle();
    });


    //slider-single-project-next img
    $(".lefts-slider-creater").click(function () {
        if ($(".actives-img").next('img').length > 0) {
            $(".actives-img").next('img').addClass('actives-img');
            $(".actives-img").first('img').removeClass('actives-img');
        } else {
            $('.slider-creater-img').first().addClass('actives-img');
            $('.slider-creater-img').last().removeClass('actives-img');
        }
    });

    //slider-single-project-prev img
    $(".right-slider-creater").click(function () {
        if ($(".actives-img").prev('img').length > 0) {
            $(".actives-img").prev('img').addClass('actives-img');
            $(".actives-img").last('img').removeClass('actives-img');
        } else {
            $('.slider-creater-img').last().addClass('actives-img');
            $('.slider-creater-img').first().removeClass('actives-img');
        }
    });

    //slider-single-project-prev img
    $(".slider-creater").click(function () {
        var src = $(".actives-img").attr('src');
        $(".cover-img-show-mor-img").attr('src', src);

        $(".cover-img-show-mor").css({
            'opacity': '1',
            'pointer-events': 'all',
        })
    });
    $(".cover-img-show-mor").click(function () {
        $(".cover-img-show-mor").css({
            'opacity': '0',
            'pointer-events': 'none',
        })
    });


    //slider-single-project-auto img

    setInterval(function () {
        if ($(".actives-img").next('img').length > 0) {
            $(".actives-img").next('img').addClass('actives-img');
            $(".actives-img").first('img').removeClass('actives-img');
        } else {
            $('.slider-creater-img').first().addClass('actives-img');
            $('.slider-creater-img').last().removeClass('actives-img');
        }
    }, 4000);


    // slider-single-sevices

    if ($(document).find('img').hasClass('list-img-services-imgs')) {
        $('.list-img-services-imgs ').click(function () {
            $(".list-img-services-imgs ").removeClass('services-active');
            $(this).addClass("services-active");
            $(".slider-first-services-img").attr('src', $(this).attr('src'));
        });

        var i_img_length = 0;
        var imgs_services = document.getElementsByClassName('list-img-services-imgs');
        setInterval(function () {
            if (i_img_length == imgs_services.length) {
                i_img_length = 0
            }
            $(".list-img-services-imgs").removeClass('services-active');
            imgs_services[i_img_length].classList.add('services-active');
            $(".slider-first-services-img").attr('src', imgs_services[i_img_length].getAttribute('src'));
            i_img_length++;

        }, 4000);
    }


    // owl-carousel
    $('.blog-box-mor-blog.owl-carousel').owlCarousel({
        rtl: true,
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    $('.blog-mor-to .owl-carousel').owlCarousel({
        rtl: true,
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });


    var line = '<div class="line-side-services"></div>';
    $(".content_area h1").before(line);
    $(".slide-down-contentarea li").click(function () {

        if ($(this).hasClass('pipin')) {
            $(".slide-down-contentarea li").next('p').slideUp();
            $(".slide-down-contentarea li").css('background-color', '#fff');
            $('.box-i svg').removeClass('fa-minus ');
            $('.box-i svg').addClass('fa-plus ');
            $(".slide-down-contentarea li").removeClass('pipin');
        } else {
            $(".slide-down-contentarea li").removeClass('pipin');
            $(".slide-down-contentarea li").css('background-color', '#fff');
            $(".slide-down-contentarea li").next('p').slideUp();
            $(this).next('p').slideToggle();
            $('.box-i svg').removeClass('fa-minus ');
            $('.box-i svg').addClass('fa-plus ');
            $(this).addClass('pipin');
            $(this).find('svg').toggleClass('fa-minus ');
            $(this).css('background-color', '#efae16');
        }


    });


});

function offsets() {
    var offset = window.pageYOffset;
    if (document.getElementById('do-box')) {
        document.getElementById('do-box').style.bottom = offset / 8 + 'px';
    }
    if (offset > 1000) {
        $('.box-hover-article1').css({
            'left': '0',
            'opacity': '1',
        });
        $('.box-hover-article3').css({
            'right': '0',
            'opacity': '1',
        });
        $('.box-hover-article2').css({
            'top': '0',
            'opacity': '1',
        });
    }


    if (offset > 5200) {
        $('.yellow-footer-coms-box').css('top', '-87px');
    } else {
        $('.yellow-footer-coms-box').css('top', '0px');

    }

    var nums = document.getElementsByClassName('span-nums');

    if (offset > 3200) {
        for (let i = 0; i < nums.length; i++) {
            var timer = setInterval(elemnts, 100);

            function elemnts() {
                if (parseInt(nums[i].innerHTML) != parseInt(nums[i].getAttribute('data'))) {
                    nums[i].innerHTML++;
                }
            }
        }
    }


    if (offset > 3700) {
        $('.rot-a').css({
            'transform': "rotateX(0deg)",
            'margin': '0 0 0 0',
        })
    }
    if (offset > 3850) {
        $('.rot-b').css({
            'transform': "rotateX(0deg)",
            'margin': '0 0 0 0',
        })
    }
    if (offset > 4000) {
        $('.rot-c').css({
            'transform': "rotateX(0deg)",
            'margin': '0 0 0 0',
        })
    }


    //positions-scroll =================================================================================================
    var work = Math.ceil($("header").height() + $(".slides").height() + $("#about").height());
    var work2 = Math.ceil($("#work").height());

    //boss-scroll
    var boss = work + work2;
    var boss2 = Math.ceil($('#boss').height());

    //projects-scroll
    var projects = boss + boss2;
    var projects2 = Math.ceil($('#projects').height());

    //howto-scroll
    var howto = projects + projects2;
    var howto2 = Math.ceil($("#howto").height());

    //persons-scroll
    var persons = howto + howto2;
    var persons2 = Math.ceil($("#persons").height() + 20);

    //blog-scroll
    var blog = persons + persons2;
    var blog2 = Math.ceil($("#reads").height());


    //work
    if (offset >= work) {

        $(".work-scroll").css({
            'opacity': "1",
        });
        $(".work-scroll").parent('.section').css({
            'background-color': '#f9d736'
        })
    }
    if (offset >= work + work2 || offset <= work) {
        $(".work-scroll").css({
            'opacity': "0",
        });
        $(".work-scroll").parent('.section').css({
            'background-color': '#fff',
        });

    }

    //boss
    if (offset >= boss) {

        $(".boss-scroll").css({
            'opacity': "1",
        });
        $(".boss-scroll").parent('.section').css({
            'background-color': '#f9d736'
        })
    }
    if (offset >= boss + boss2 || offset <= boss) {
        $(".boss-scroll").css({
            'opacity': "0",
        });
        $(".boss-scroll").parent('.section').css({
            'background-color': '#fff',
        });

    }

    //projects
    if (offset >= projects) {

        $(".projects-scroll").css({
            'opacity': "1",
        });
        $(".projects-scroll").parent('.section').css({
            'background-color': '#f9d736'
        })
    }
    if (offset >= projects + projects2 || offset <= projects) {
        $(".projects-scroll").css({
            'opacity': "0",
        });
        $(".projects-scroll").parent('.section').css({
            'background-color': '#fff',
        });

    }

    //how-to
    if (offset >= howto) {

        $(".howto-scroll").css({
            'opacity': "1",
        });
        $(".howto-scroll").parent('.section').css({
            'background-color': '#f9d736'
        })
    }
    if (offset >= howto + howto2 || offset <= howto) {
        $(".howto-scroll").css({
            'opacity': "0",
        });
        $(".howto-scroll").parent('.section').css({
            'background-color': '#fff',
        });

    }


    //persons
    if (offset >= persons) {

        $(".persons-scroll").css({
            'opacity': "1",
        });
        $(".persons-scroll").parent('.section').css({
            'background-color': '#f9d736'
        })
    }
    if (offset >= persons + persons2 || offset <= persons) {
        $(".persons-scroll").css({
            'opacity': "0",
        });
        $(".persons-scroll").parent('.section').css({
            'background-color': '#fff',
        });

    }

    //blog
    if (offset >= blog) {

        $(".blog-scroll").css({
            'opacity': "1",
        });
        $(".blog-scroll").parent('.section').css({
            'background-color': '#f9d736'
        })
    }
    if (offset >= blog + blog2 || offset <= blog) {
        $(".blog-scroll").css({
            'opacity': "0",
        });
        $(".blog-scroll").parent('.section').css({
            'background-color': '#fff',
        });

    }


    // side-bar-fixed-in-scroll//========================================================================================

    if ($(window).width() > 1200) {
        var address_wrb = $(".address-wrb").height() + $("header").height() + $(".sides-sidebar").height() - $(window).height() + 75;
        var heights = $("main").height() - $('footer').height();

        if (offset > address_wrb) {
            $(".sides-sidebar").addClass("sides-sidebar-fixed");
            $(".sides-sidebar").removeClass("sides-sidebar-abs");
        } else {
            $(".sides-sidebar").removeClass("sides-sidebar-fixed");
        }

        if (offset > heights) {
            $(".sides-sidebar").removeClass("sides-sidebar-fixed");
            $(".sides-sidebar").addClass("sides-sidebar-abs");
        }
    }else {
        $(".sides-sidebar").removeClass("sides-sidebar-fixed");
        $(".sides-sidebar").removeClass("sides-sidebar-abs");

    }

}

