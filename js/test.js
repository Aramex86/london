$(document).ready(function () {
    $('.thirdslider').bxSlider({
        maxSlides: 4,
        moveSlides: 1,
        slideWidth: 370,
        pager: false,
        randomStart: true,
        auto: true,

    });
    $('.slider').bxSlider({
        moveSlides: 1,
        maxSlides: 5,
        slideWidth: 365,
        pager: false,
        randomStart: true,
        auto: true,
    });
    $('.headerslider').bxSlider({
        pager: false,
        auto: true,
        autoHover: true,
        maxSlides: 1,
        moveSlides: 1,
        minSlides: 1,
    });
    $(".menubtnshow").click(function () {
       $(".mobile-menuwrap").show(1000);
       $(".menubtnshow").css("display","none");
       $(".menubtnhide").css("display","block");
    });
    $(".menubtnhide").click(function () {
        $(".mobile-menuwrap").hide(1000);
        $(".menubtnshow").css("display","block");
        $(".menubtnhide").css("display","none");
    });
    /***********************
     * Our apartaments
     */
    $(".apartaments:eq(0) img:nth-child(1)").mouseover(function () {
       $(".hoverroom:eq(0)").fadeIn(500);
       $(".hoverroom:eq(0)").mouseleave(function () {
           $(".hoverroom:eq(0)").fadeOut(500);
       });
    });
    $(".apartaments:eq(1) img:nth-child(1)").mouseover(function () {
        $(".hoverroom:eq(1)").fadeIn(500);
        $(".hoverroom:eq(1)").mouseleave(function () {
            $(".hoverroom:eq(1)").fadeOut(500);
        });
    });
    $(".apartaments:eq(2) img:nth-child(1)").mouseover(function () {
        $(".hoverroom:eq(2)").fadeIn(500);
        $(".hoverroom:eq(2)").mouseleave(function () {
            $(".hoverroom:eq(2)").fadeOut(500);
        });
    });
    $(".apartaments:eq(3) img:nth-child(1)").mouseover(function () {
        $(".hoverroom:eq(3)").fadeIn(500);
        $(".hoverroom:eq(3)").mouseleave(function () {
            $(".hoverroom:eq(3)").fadeOut(500);
        });
    });
    $(".apartaments:eq(4) img:nth-child(1)").mouseover(function () {
        $(".hoverroom:eq(4)").fadeIn(500);
        $(".hoverroom:eq(4)").mouseleave(function () {
            $(".hoverroom:eq(4)").fadeOut(500);
        });
    });
    $(".apartaments:eq(5) img:nth-child(1)").mouseover(function () {
        $(".hoverroom:eq(5)").fadeIn(500);
        $(".hoverroom:eq(5)").mouseleave(function () {
            $(".hoverroom:eq(5)").fadeOut(500);
        });
    });
    $(".like").click(function () {
       $(this).css('background-color','#0089f6');
    });
    $(".like").dblclick(function () {
       $(this).css('background-color','#dde6f2');
    });
    /*******************************
     * Our blog
     */
    $(".article a").eq(0).mouseover(function () {
        $(".article-hover:eq(0)").fadeIn(500);
       $(".author:eq(0)").css("color","#4588f2");
       $(".article a").mouseleave(function () {
           $(".article-hover").fadeOut(500);
          $(".author").css("color","black");
       });
    });
    $(".article a").eq(1).mouseover(function () {
        $(".article-hover:eq(1)").fadeIn(500);
        $(".author:eq(1)").css("color","#4588f2");
        $(".article a").mouseleave(function () {
            $(".article-hover").fadeOut(500);
            $(".author").css("color","black");
        });
    });
    $(".article a").eq(2).mouseover(function () {
        $(".article-hover:eq(2)").fadeIn(500);
        $(".author:eq(2)").css("color","#4588f2");
        $(".article a").mouseleave(function () {
       $(".article-hover").fadeOut(500);
         $(".author").css("color", "black");
            });
        });
    $(".article a").eq(3).mouseover(function () {
        $(".article-hover:eq(3)").fadeIn(500);
        $(".author:eq(3)").css("color","#4588f2");
        $(".article a").mouseleave(function () {
            $(".article-hover").fadeOut(500);
            $(".author").css("color","black");
        });
    });
    $(".article a").eq(4).mouseover(function () {
        $(".article-hover:eq(4)").fadeIn(500);
       $(".author:eq(4)").css("color","#4588f2");
        $(".article a").mouseleave(function () {
            $(".article-hover").fadeOut(500);
            $(".author").css("color","black");
        });
    });
























});







