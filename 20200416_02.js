$(document).ready(function(){
  $('button').click(function(e){console.log(e);
  });
  var e = $.Event('click');//jquery전역메소드
  $('button').trigger(e);

  $('data').keydown(function(e){
    $(this).val($(this).val()+e.keyCode)
  });

  var k = $.Event('keydown');
  k.keyCode='A';
  $('#data').trigger(k);
});
