var menus = ['회사소개', '과정소개', '강좌소개', '게시판', '회원가입'];

$(document).ready(function(){
  let ul = $('<ul>').appendTo($('#navi>#row'));
  menus.forEach(function(item){
    $('<li/>', {text : item}).appendTo(ul);
  });
});
