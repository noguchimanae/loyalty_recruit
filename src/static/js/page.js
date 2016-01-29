$(".toggle").click(function(){
  $(this).toggleClass("active").next().slideToggle(300);
});


//$('.animation').css('visibility','hidden');
//$(window).scroll(function(){
//  var windowHeight = $(window).height(),
//      topWindow = $(window).scrollTop();
//  $('.bounce').each(function(){
//    var targetPosition = $(this).offset().top;
//    if(topWindow > targetPosition - windowHeight + 100){
//      $(this).addClass("bounce");
//    }
//  });
//});

