// selectと同じようにonchangeでラベルを変えたいときはJSを用いる
$('.sp_list').on('change', function(){
  var $this = $(this)
  var $option = $this.find('option:selected');
  $('.label').text($option.text());

  // onchange後にフォーカスしてるのが嫌な場合
  $this.blur();
  console.log(1);
});


//$(function(){
$(function(){
  $(".articles").each(function(){
    $(this).find("article:gt(8)").each(function(){$(this).hide();});
    $(this).append('<div class="panel pt40"><p class="panel_inner button">もっと見る</p></div>');
    $(this).find("div:last").click(function(){
      $(this).parent().find("article").show(300); $(this).remove();});
  });
});

//$('.label').change(function(){
//  console.log(3);
//  if ($('.label:checked').val() == 1) {
//    // 表示させないから…と思ってまず書いたのはこちら
//    $('.company').remove();
//  }
//});

//$(function(){
//  $(window).load(function(){
//    var delaySpeed = 100;
//    var fadeSpeed = 1000;
//    $('.articles article').each(function(i){
//      $(this).delay(i*(delaySpeed)).css({
//        display:'block',
//        opacity:'0'
//      }).animate({
//        opacity:'1'
//      },fadeSpeed);
//    });
//  });
//});

//var company = function(){
//  
//}


$('.index_all').click(function(){
//  console.log(1);
  $('.all').animate({
      opacity: '0',
      display:'block'
    }).animate({
      opacity: '1'
    })
});

$('.index_company').click(function(){
  $('.all').animate({
    opacity: '0',
    display: 'block',
    complete: function(){
      $('.company').css();
    }
  })
});


//$("#animate").click(function(){
//  $(".block").animate({
//    width: "toggle",
//    opacity: "toggle"
//  },{
//    duration: "slow",
//    easing: "linear",
//     complete: function(){alert("completed!");},
//     step: function(s){$("#steps").text(s)}
//    }
//  );
//});