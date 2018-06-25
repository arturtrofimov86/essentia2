$(document).ready(function () {

    // var $animation_elements = $('.row .img img, .slid-right');
    // var $animation_elementSL = $('.slid-left');
    // var $animation_elementI = $('.projects-icons > div');
    // var $parallax = $('.parallax');
    var $window = $(window);
    // function check_if_in_view() {
    //     var window_height = $window.height();
    //     var window_top_position = $window.scrollTop();
    //     var window_bottom_position = (window_top_position + window_height);
    //     $.each($animation_elements, function() {
    //         var $element = $(this);
    //         var element_height = $element.outerHeight();
    //         var element_top_position = $element.offset().top;
    //         var element_bottom_position = (element_top_position + element_height);
    //         var element_centr = (element_top_position + element_bottom_position)/2;
    //         if ((window_bottom_position - element_top_position) > 0 && (window_bottom_position - element_top_position) < window_height+element_height){
    //             var pecent = parseInt((((window_bottom_position) - element_top_position)/(window_height+element_height))*100);
    //             if (pecent > 50){
    //                 $element.css({ "transform": "translateY(" + String(13-pecent/3+'%') + ")"});
    //             }else{
    //                 $element.css({ "transform": "translateY(" + String(13-pecent/3+'%') + ")"});
    //             }
    //
    //         }
    //     });
        // $.each($parallax, function() {
        //     var $element = $(this);
        //     var element_height = $element.outerHeight();
        //     var element_top_position = $element.offset().top;
        //     var element_bottom_position = (element_top_position + element_height);
        //     var element_centr = (element_top_position + element_bottom_position)/2;
        //     if ((window_bottom_position - element_top_position) > 0 && (window_bottom_position - element_top_position) < window_height+element_height){
        //         var pecent = parseInt((((window_bottom_position) - element_top_position)/(window_height+element_height))*100);
        //         if (pecent > 50){
        //             $element.css({ "transform": "translateY(" + String(13-pecent/3+'%') + ")"});
        //         }else{
        //             $element.css({ "transform": "translateY(" + String(13-pecent/3+'%') + ")"});
        //         }
        //
        //     }
        // });
        // $.each($animation_elementSL, function() {
        //     var $element = $(this);
        //     var element_height = $element.outerHeight();
        //     var element_top_position = $element.offset().top;
        //     var element_bottom_position = (element_top_position + element_height);
        //     var element_centr = (element_top_position + element_bottom_position)/2;
        //     if ((window_bottom_position - element_top_position) > 0 && (window_bottom_position - element_top_position) < window_height+element_height){
        //         var pecent = parseInt((((window_bottom_position) - element_top_position)/(window_height+element_height))*100);
        //         if (pecent > 50){
        //             $element.css({ "transform": "translateY(" + String(13-pecent/1.5+'%') + ")"});
        //         }else{
        //             $element.css({ "transform": "translateY(" + String(13-pecent/1.5+'%') + ")"});
        //         }
        //
        //     }
        // });
        // $.each($animation_elementI, function() {
        //     var $element = $(this);
        //     var pecent;
        //     var element_height = $element.outerHeight();
        //     var element_top_position = $element.offset().top;
        //     var element_bottom_position = (element_top_position + element_height);
        //     var element_centr = (element_top_position + element_bottom_position)/2;
        //     if ((window_bottom_position - element_top_position) > 0 && (window_bottom_position - element_top_position) < window_height+element_height){
        //         pecent = parseInt((((window_bottom_position) - element_top_position)/(window_height+element_height))*100);
        //         $element.css({"margin-bottom": String(130-pecent/0.9+"px")});
        //     }
        // });
        /*$.each($('.what-is-essentia > p'), function() {
            var $element = $(this);
            var pecent;
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);
            var element_centr = (element_top_position + element_bottom_position)/2;
            if ((window_bottom_position - element_top_position) > 0 && (window_bottom_position - element_top_position) < window_height+element_height){
                pecent = parseInt((((window_bottom_position) - element_top_position)/(window_height+element_height))*100);
                $element.css({"margin-bottom": String(90-pecent/1.2+"px")});
            }
        });
        $.each($('.des > p, .des > h2'), function() {
            var $element = $(this);
            var pecent;
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);
            var element_centr = (element_top_position + element_bottom_position)/2;
            if ((window_bottom_position - element_top_position) > 0 && (window_bottom_position - element_top_position) < window_height+element_height){
                pecent = parseInt((((window_bottom_position) - element_top_position)/(window_height+element_height))*100);
                $element.css({"margin-bottom": String(60-pecent/1.3+"px")});
            }
        });*/
        // $.each($('footer'), function() {
        //     var $element = $(this);
        //     var pecent;
        //     var element_height = $element.outerHeight();
        //     var element_top_position = $element.offset().top;
        //     var element_bottom_position = (element_top_position + element_height);
        //     var element_centr = (element_top_position + element_bottom_position)/2;
        //
        //     if ($(document).height()-300 <= window_bottom_position){
        //         $element.css({ "bottom": (window_bottom_position - $(document).height())/2 + "px"});
        //     }else{
        //
        //     }
        //
        // });
    // }

    var $animation_element = $('.top-block .one, .top-block .tow, .top-block .three');
    var $animation_elementL = $('.left-block .one, .left-block .tow, .left-block .three');
    var $animation_elementR = $('.right-block .one, .right-block .tow, .right-block .three');
    function check_if_in_view2() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        $.each($animation_element, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height*2);
            // var element_centr = (element_top_position + element_bottom_position)/2;
            // if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                $element.addClass('viewt');
                // $element.css({ "transform":"translateY(" + -window_top_position*(element_height/window_height) + "px)" });
            // } else {
            //     $element.removeClass('viewt');
            // }
        });

        $.each($animation_elementL, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height*2);
            // var element_centr = (element_top_position + element_bottom_position)/2;
            // if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                $element.addClass('viewtL');
                // $element.css({ "transform":"translateX(" + -window_top_position*($element.outerWidth()/$window.width()) + "px)" });
            // } else {
            //     $element.removeClass('viewtL');
            // }
        });

        $.each($animation_elementR, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height*2);
            // var element_centr = (element_top_position + element_bottom_position)/2;
            // if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                $element.addClass('viewtR');
                // $element.css({ "transform":"translateX(" + window_top_position*($element.outerWidth()/$window.width()) + "px)" });
            // } else {
            //     $element.removeClass('viewtR');
            // }
        });

    }

    function clicked() {
        var $menu = $(".menuM");
        console.log("burger");
        if ($(".menuM").height()<65){
            $menu.removeClass('close');
            $menu.addClass('open');
        }else if($menu.height()>64){
            $menu.removeClass('open');
            $menu.addClass('close');
        }
    }

    var $menuM = $('.menuM, .essentia');
    function scrolls() {
        $(".menuM").removeClass('open');
        $(".menuM").addClass('close');
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        // var window_bottom_position = (window_top_position + window_height);
        $.each($menuM, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            if (100 < window_top_position) {
                $element.addClass('scrol');
            } else {
                $element.removeClass('scrol');
            }
        });
    }

    function docsClose(e) {
        try {
            if ($('#docs').attr("data-click") == "true" && e.target.offsetParent.id != "docs"){
                $('#docs').attr("data-click", "false");
                $('#docs').removeClass('docs-open');
            }
        } catch(err){}
    }

    function docsmClose(e) {
        try {
            if ($('#docsm').attr("data-click") == "true" && e.target.offsetParent.id != "docsm"){
                $('#docsm').attr("data-click", "false");
                $('#docsm').removeClass('docs-open');
            }
        } catch(err){}

    }
    function docsm() {
        console.log("docsm");
        if ($('#docsm').attr("data-click") == "false"){
            $('#docsm').attr("data-click", "true");
            $('#docsm').addClass('docs-open');
        } else if ($('#docsm').attr("data-click") == "true"){
            $('#docsm').attr("data-click", "false");
            $('#docsm').removeClass('docs-open');
        }
    }
    function docs() {
        console.log("docs");
        if ($('#docs').attr("data-click") == "false"){
            $('#docs').attr("data-click", "true");
            $('#docs').addClass('docs-open');
        } else if ($('#docs').attr("data-click") == "true"){
            $('#docs').attr("data-click", "false");
            $('#docs').removeClass('docs-open');
        }
    }

    $("#docs").on('click', docs);
    $("#docsm").on('click', docsm);
    $("body").on('click', docsClose);
    $("body").on('click', docsmClose);
    $("#burger").on('click', clicked);
    // $window.on('scroll resize', check_if_in_view2);
    check_if_in_view2();
    // $window.on('scroll resize', check_if_in_view);
    if( $(window).width() <= 767){
        $window.on('scroll resize', scrolls);
    }
    $window.trigger('scroll');
});