
var ary = [1,2,3,4,5];

var obj = new Object();
obj.name = "javascript";
obj.version = "1.0";//obj['version']


for (var i=0; i<ary.length ; i++){
  document.writeln(ary[i]+'<br/>');
}
for(var value in obj){
  document.writeln(obj[value] +'<br/>');
}
///////////////////////////////////////

var today = new Date();

document.writeln(today.getFullYear()+'y');
document.writeln(today.getMonth()+1);
document.writeln(today.getDate());
document.writeln(today.getDay() +'<br/><br/>');
document.writeln(today.getHours());
document.writeln(today.getMinutes());
document.writeln(today.getSeconds());

////////////////////////////////////////////////////////
func('funfun');//선언적 함수 선언, 변수선언을 하게 될경우 우선적으로 한번
//다 읽어 들인뒤 실해되기 때문에, 먼저 호출을 해도 실행이 된다.
function func(str){
  alert(str);
}


//얘는 직접적 선언이 되지 않았기 때문에 실행되지 않는다.
var funcA = function(){//익명함수
  alert('funcA() 함수 호출');
}
funcA();

var funcB = function(a,b){
  return(a+b);
}
alert(funcB(10, 20));

function out (a, func){ //함수의 선언으로 두개의 인수 중 두번째 인수가 함수
  //함수 처리내용이 정의.
  return func(a);     //두번째 인수로 전달받은 함수를 첫번째 인수를 인수로 하여 호출
}

out(10, function(a){
  alert(a);}
);
