var img = $('<img/>');
var img2 = $('<img/>');

$(document).ready(function(){
  //기존에 존재하는 속성에 대해서,
  // img.attr('src');
  img.attr('src', 'a.jpg');
  img.attr('width', '100px');
  //기조에 존재하지 않는 속성을 생성하고자 할때
  // img.setAttr('src', 'value');
  //요소로부터 속성을 제거하고자 할때
  // img.removeAttr('src');
  img2.attr('src', 'c.jpg')
        .css('width', '100px');
  img.appendTo($('body'));
  img2.appendTo($('body'));
  img.clone().attr('src', 'd.jpg').appendTo($('body'));
  img2.clone().appendTo($('body'));
});
