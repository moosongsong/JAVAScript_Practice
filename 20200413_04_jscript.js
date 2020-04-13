var ary = [10,20,30];

var ary2 = Array();
ary2[0]=10;
ary2[1]=20;
ary2[2]=30;

var ary1 = Array(10,20,30);


var func = function(){
  for (var value in arguments){
    document.write(arguments[value]+'<br/>');
  }
}
func(10,30);


function getFunc(){
  let sum=0;
  //sum 값을 사용
  sum =10;
  return function(){
    return sum;
  }
}
var f =getFunc()();
document.write(f+'<br/>');

function funcA(cnt, callFunc){
  callFunc(cnt);
}

function callFunc(cnt){
  alert(cnt);
}

funcA(100, callFunc);

funcA(100, function(cnt){
  alert(cnt);}
);

function funcB(){
  return function(){
    alert('return function call');
  }
}

funcB()();

var count = 0;
function funcC(){
  count++;
  return function(){
    return count;
  }
}

var ff = funcC();
alert(ff());
//함수는 사용된 이후 스텍프레임에서 사라져야 하는데 return 때문에 언제 호출될 지 몰라서
//사라지지 않고, 계쏙 스텍프레임에 남아있는다.그대로 메모리상에 남는다.
//이 안에 있는 값을 외부에서 필요로하기 때문에 이를 사용하는 것이다.->클로져
