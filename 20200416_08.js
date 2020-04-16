$(document).ready(function(){
  let temp = 'http://127.0.0.1:3000/20200416_javaScript/20200416_08_data.txt';

  $.ajax({
    url : temp
  }).done(function(data){
    var items = eval('('+data+')');
    $(items).each(function(index, item){
      $('<div/>', {text:item.title}).appendTo($('body'));
    });
  });
});
