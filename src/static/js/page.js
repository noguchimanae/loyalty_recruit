

$(".toggle").click(function(){
  $(this).toggleClass("active").next().slideToggle(300);
});
