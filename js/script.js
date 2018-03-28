//console.log('hello')
$(function(){
    $('.main_bxslider').bxSlider({
         auto: true,
         mode: 'fade',//효과
         captions: false,//캡션 사용유무(true/false)
         pause: 5000
     });

  //  gnb에 마우스 오버했을 떄 메뉴 열림
  $('#menu .gnb > li').mouseenter(function(){
    $(this).find('.lnb')
           .stop()
           .fadeIn(300)
            .css('background','rgba(0, 102, 51, 0.83)');
  });
  //gnb에서 마우스가 떠났을 때 메뉴 닫힘
  $('#menu .gnb > li').mouseleave(function(){
    $(this).find('.lnb').stop().fadeOut(300);
  });

//  language에 마우스 오버했을 떄 메뉴 열림
  $('#btn button').click(function(){
    $(this).find('.btn_menu')
           .stop()
           .slideToggle(500)
           .css('background','#756452');
  });
});
//스크롤 시 header 색 변경
//$(window).scroll(function () {
//   if( $(this).scrollTop() >= 960){
//      $("header").css('background','#94763f61');
//      }
//});
//스크롤 시 header 색 변경
$(function(){
   shows();
   $(window).resize(function(){
      shows();
   });
});
function shows(){
   var win_h = $(window).height();
   if(win_h < 1280){
      $(window).on('scroll', function(event){
         var y=$(this).scrollTop();
         if( y > 5){
           $('header').css('background','rgba(117, 100, 82, 0.89)');
           } else {
           $('header').css('background','rgba(117, 100, 82, 0.3)');
         }
      });
   } else {$(window).off('scroll');}
}

//이미지 롤오버(rolliver)효과
$(document).ready(function(){
    $("img").hover(function() {
        var temp = $(this).attr("src");
        $(this).attr("src", $(this).attr("data-alt-src"));
        $(this).attr("data-alt-src", temp);
    });
});

//토글버튼
$(function(){
  $('#menubtn').click(function(){
    $('#menu')
      .toggleClass('on');
      // .stop()
      // .slideToggle();
  });

});
