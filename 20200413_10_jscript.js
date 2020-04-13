//var로 외부에서 내부로의 접근을 제한한다.
//상속과 포함은 다르다.
//부모가 가지고 있는 것을 자녀가 가지고 있는 것처럼 사용할 수 있어야 한다.
//상속을 많이 쓰지는 않는다. 그래도 잘 보아두자. 자바처럼 명시적인 클래스가 없기 때문이다.
//ecma6에서부터는 클래스를 지원하다 다른 브라우저에서 돌아가지 않을 수 있다.
//생성자는 constructor라고 한다.

//기본객체 : 우리가 만들지 않아도 기본적으로 제공 = 내장객체라고도 함. 빌드인오브젝트

var obj = new Object();
obj.name = 'hong';//이런식으로 사용가능

function Person(name, score){
  this.name = name;
  this.score = score;
}

Person.prototype.show() = function(){
  document.write(this.name+' : '+this.score);
}
var ob = new Person('sim', 30);
