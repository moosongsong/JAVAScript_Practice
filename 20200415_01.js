$(document).ready(function(){

  $('h1').css('backgroud', 'Gray').add('h2').css('float', 'left');

});

$(document).ready(function(){

  var ary = [
    { name: 'Hanbit Media', link:'http://hanbit.co.kr' },
    { name: 'Daum', link:'http://daum.net' },
    { name: 'Naver', link:'http://naver.com' }
  ];

  $.each(ary, function(index, item){
          var output = '';

          output += '<a href="'+item.link+'">';
          output += '<h1>'+item.name+'</h1>';
          output += '</a>';

          document.body.innerHTML += output;
        });
});
