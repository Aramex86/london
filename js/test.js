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
    $(".apartaments:eq(6) img:nth-child(1)").mouseover(function () {
        $(".hoverroom:eq(6)").fadeIn(500);
        $(".hoverroom:eq(6)").mouseleave(function () {
            $(".hoverroom:eq(6)").fadeOut(500);
        });
    });
    $(".apartaments:eq(7) img:nth-child(1)").mouseover(function () {
        $(".hoverroom:eq(7)").fadeIn(500);
        $(".hoverroom:eq(7)").mouseleave(function () {
            $(".hoverroom:eq(7)").fadeOut(500);
        });
    });
    $(".apartaments:eq(8) img:nth-child(1)").mouseover(function () {
        $(".hoverroom:eq(8)").fadeIn(500);
        $(".hoverroom:eq(8)").mouseleave(function () {
            $(".hoverroom:eq(8)").fadeOut(500);
        });
    });
    $(".apartaments:eq(9) img:nth-child(1)").mouseover(function () {
        $(".hoverroom:eq(9)").fadeIn(500);
        $(".hoverroom:eq(9)").mouseleave(function () {
            $(".hoverroom:eq(9)").fadeOut(500);
        });
    });
    $(".apartaments:eq(10) img:nth-child(1)").mouseover(function () {
        $(".hoverroom:eq(10)").fadeIn(500);
        $(".hoverroom:eq(10)").mouseleave(function () {
            $(".hoverroom:eq(10)").fadeOut(500);
        });
    });
    $(".apartaments:eq(11) img:nth-child(1)").mouseover(function () {
        $(".hoverroom:eq(11)").fadeIn(500);
        $(".hoverroom:eq(11)").mouseleave(function () {
            $(".hoverroom:eq(11)").fadeOut(500);
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
    $('.menu-top a').mouseover(function () {
       $(this).addClass('active');
       $('.menu-top a').mouseleave(function () {
          $(this).removeClass('active');
       });
    });
    $('.mobile-menu a').mouseover(function () {
        $(this).addClass('active');
        $('.mobile-menu a').mouseleave(function () {
            $(this).removeClass('active');
        });
    });

   $('.day').click(function () {
     $.each([6,4,8,2,10,11],function (i ,hide) {
         $('.apartaments').eq(hide).fadeIn(1000);
     });
       $.each([0,1,9,3,7,5],function (i , show) {
           $('.apartaments').eq(show).fadeOut(1000);
       });
   });
   $('.month').click(function () {
      $.each([0,10,2,8,4,11],function (i , show) {
         $('.apartaments').eq(show).fadeIn(1000);
      });
       $.each([6,7,3,9,1,5],function (i ,hide) {
           $('.apartaments').eq(hide).fadeOut(1000);
       });
   });
    $('.all').click(function () {
       $.each([0,1,2,3,4,5,6,7,8,9,10,11],function (i, all) {
          $('.apartaments').eq(all).fadeIn(1000);
       });
    });
        $.each([9,11,8,6,10,11],function (name) {
            $('.apartaments').eq(name).hide();
        });
            $('.social img').eq(0).mouseover(function () {
                $(this).attr("src","image/bxarrows/footerfacebookhover.png");
               $(this).mouseleave(function () {
                   $(this).attr("src","image/bxarrows/footerfacebook.png");
               }) ;
                   });
                $('.social img').eq(1).mouseover(function () {
                $(this).attr("src","image/bxarrows/footertwiterhover.png");
                $(this).mouseleave(function () {
                    $(this).attr("src","image/bxarrows/footertwiterwhite.png");
                }) ;
            });
                   $('.social img').eq(2).mouseover(function () {
                $(this).attr("src","image/bxarrows/footergooglehover.png");
                       $(this).mouseleave(function () {
                           $(this).attr("src","image/bxarrows/footergoogle.png");
                       }) ;
            });
                   $('.social img').eq(3).mouseover(function () {
                $(this).attr("src","image/bxarrows/footerlinkinhover.png");
                       $(this).mouseleave(function () {
                           $(this).attr("src","image/bxarrows/footerlinkin.png");
                       }) ;
            });
































});







