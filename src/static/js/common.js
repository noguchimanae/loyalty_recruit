$(function() {
  var flg = "default";
  $(".header_menu").on('click',function() {
    console.log(1);
    if(flg == "default"){
      $(".sp nav").css({
        display:"block"
      });
      flg = "changed";
    }else{
      $(".sp nav").css({
        display:"none"
      });
      flg = "default";
    }
  });
});

$(function(){
  $('.pagetop').click(function () {
    $("html,body").animate({
      scrollTop:0
    },"300");
  });
});