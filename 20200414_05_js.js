// JQuery(document).ready(start);

$(document).ready(function(){
  // $('body').text('hello');
  $('div').text('hola');
  // console.log($('div'));

  var org = document.getElementById('first');
  $(org).text('hello');
  var obj = $('div');
  $(obj[0]).text('abc');
  console.log(obj[0]);
  console.log(obj[1]);


  $('div#first').text('grd'+'<br/>');

  $('div>div').text('hola');
});
