$(document).ready(function(){
  var ul = $('<ul/>', {id:'firstUL'});
  $('body').append(ul);
  ul.append($('<li/>', { text : 'java'}));
  ul.prepend($('<li/>', { text : 'database'}));
  $('ul>li:first-child').after($('<li/>', { text : 'jquery'}));
  $('ul>li:nth-child(2)').before($('<li/>', {text : 'css'}));

  ul.empty();
  $('body').empty();

//리스트붕 첫번째 삭제하기
  $('ul>li:first-child').remove();
});
