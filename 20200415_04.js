$(document).ready(function(){
  // setInterval(function(){
  //   $('li:first-child').appendTo($('ul'));
  // }, 1000);

  // chahge();

  //첫번째 방법
  $('button:first-child').click(function(){
    $('li:last-child').prependTo($('ul'));
  });
  $('button:last-child').click(function(){
    $('li:first-child').appendTo($('ul'));
  });
  //두번째 방법
  $('button').click(function(){
    if (($(this).text())=='prev'){
      $('li:last-child').prependTo($('ul'));
    }else{
      $('li:first-child').appendTo($('ul'));
    }
  });
});

function chahge(){
  $('li').first().appendTo($('ul'));
  setTimeout(arguments.callee, 1000);
}
