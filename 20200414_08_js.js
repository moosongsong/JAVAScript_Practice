$(document).ready(function(){
  //해당 태그를 객체화 하기
  $('<div>여기에 내용...</dir>').appendTo($('body'));
  $('<div/>', {text : '여기에 내용', id : 'attechedid'}).appendTo($('body'));

//리스트를 문서에 추가하기
  let ul = $('<ul/>').appendTo($('body'));
  $('<li/>', { text : 'java'}).appendTo(ul);
  $('<li/>', { text : 'database'}).appendTo(ul);
  $('<li/>', { text : 'jquery'}).appendTo(ul);
  $('<li/>', {text : 'css'}).insertBefore(ul.find('li:first-child'));

  let ul2 = $('<ul/>');
  $('<li/>', { id:'java',text : 'java'}).appendTo(ul2);
  $('<li/>', { id:'db',text : 'database'}).appendTo(ul2);
  $('<li/>', { id:'jq',text : 'jquery'}).appendTo(ul2);
  $('<li/>', {id:'css', text : 'css'}).insertBefore(ul2.find('li#db'));
  $('body').append(ul2);
});
