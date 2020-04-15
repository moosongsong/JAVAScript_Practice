var names = ['hong', 'sin', 'lee', 'kim', 'choi',
            'song', 'sim', 'nam', 'kang', 'nono'];

$(document).ready(function(){

  //문서에서 찾을 때는 find를 쓸 필요가 없으나
  //새로운 요소를 만들어 집어 넣으려고 하는 상황에서
  //html로 짜버린경우 행당 html에서 찾으려고 하는 경우에
  //find를 사용한다.
  var html = '<ul>'+
                '<li></li>'+
                '<li></li>'+
              '</ul>';
  var obj = $(html);
  obj.find('li:first-child').text('1st list');
  obj.find('li:last-child').text('last list');
  $('body').append(obj);
});
