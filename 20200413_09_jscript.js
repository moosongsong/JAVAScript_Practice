// var ary3 = [...ary];
// for(var i=0; i<ary3.length;i++){
//   document.writeln(ary3[i] + '<br/>');
// }

function Person(name, kor, eng, math){//객체를 생성하는 함수는 대문자로 시작하자.
  this.name = name;
  this.kor=kor;
  this.eng = eng;
  this.math = math;
}

Person.prototype.toString = function(){
  document.write('name : '+this.name +'<br/>');
  document.write('kor : '+this.kor+'<br/>');
  document.write('eng : '+this.eng+'<br/>');
  document.write('math : '+this.math+'<br/>');
};
//프로토타입 입력
Person.prototype.name = 'you';
var p = new Person('hong', 90, 100, 90);
// p.name = 'hong';//의미 없음.
p.toString();

document.write('<br/>');

var s = new Person('sim', 80, 70, 50);
//이름을 지우면 프로토타입의 값이 나타난다.
delete s.name;
s.toString();
//멤버가 기본적으로 가지고 있어야할 멤버는 this.
//어떤 객체가 되었건 공통적으로 가져야할 멤버나 메소드는 프로토타입에 지정한다.
