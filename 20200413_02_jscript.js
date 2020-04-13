//var는 전역변수 안써도 전역변수로 지정된다.
//let a=100;는 지역변수 이다.
var a;
function func(){
  a=100;
}
func();
alert(a);
if(a<10){//true로도 작성가능
  alert('팝업을 통한 "메시지" 출력');
}
else{
  document.write('문서에 "메시지" 출력');
}
console.out('콘솔을 통한 출력');
var ryu;
if(ryu){
  alert("true");
}
else{
  alert("false");
}
/////////////////////////////////////////////////
var uname;
uname = window.prompt('당신의 이름은?', '덜덜');
alert(uname);
/////////////////////
var bool;
bool = confirm(",,,");
alter(bool);
///////////////////////////////////////////
var ab = 1;
if(ab == true){
  alert("yes");
}
else{
  alert("no");
}
//////////////////////////////////////////
var ary = [1,2,3,4,5];
for (var i=0; i<ary.length ; i++){
  document.writeln(ary[i]+'<br/>');
}
