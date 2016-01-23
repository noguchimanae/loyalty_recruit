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
//  $('#maximage').maximage({
//    isBackground: true,
//    slideShow: true,
//    slideShowTitle: false,
//    slideDelay: 5,
//    overflow: 'auto',
//    verticalAlign:'top'
//  });
//});

