(function(str){ //익명함수는 호출할 방법이 없다.
  document.writeln(str);
})('HELLO');//선언, 정의와 동시에 호출을 사용하면 할 수 있다.

var id = setTimeout(function(){
  alert('예약작업 수행');
}, 10000);

alert('인생은 혼자이다.');

setTimeout(function(){
  clearTimeout(id);
  alert('clear');
}, 1000);
