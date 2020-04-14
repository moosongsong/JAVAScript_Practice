document.write("document wirte"+'</br>');

var str = "global variation";

str = "global var";


function funcA(){
  let str = 'funcA의 local var';
}

var funcB = function(){
  let str = 'funcBs local var';
}


//익명함수의 용도
//이름이 없으므로 외부에서 호출할 수 없다.
//변수 안에 함수가 들어가 있음까지 파악하지 못한다.
//
document.write("document wirte"+'</br>');
(function(str){
  document.write("익명함수의 정의와 동시에 실행"+str+'<br/>');
})('hello');
// document.write("익명함수의 정의와 동시에 실행"+str);
//실행되는 결과에는 차이가 없더라도 묶을 수 있다는 점. 필요한 값을 인수로
//전달할 수 있다는 점이 있다. 즉 코드 단편화를 줄일 수 있다.


//콜백을 실행하기 위해서 익명함수를 사용한다.
setTimeout(function(){
  ;
},1000);

//함수의 반환값으로 함수를 사용하기 위해서 익명함수를 사용한다.
function getFunc(){
  return function(){};
}

function getFunc2(){
  return funcB();
}


//객체의 멤버로서 함수를 가지게 될때 익명함수를 사용한다.

//함수는 일종의 프로그램코드의 집합. 함수는 하나의 기능을 수행한다.
//function이라는 예약어를 통해 함수를 정의 한다.

function min(n1, n2, n3){
  arguments[3];
}//인수를 줄수도 안줄수도 있다. 나머지 값은 undifined의 자료형을 지니는 것일 뿐
//함수마다 함수내에 arguments 객체를 지니고 있고, arguments는 매개변수의 값을 모두다 저장하고 있다.

function min(...nums){
  let temp=nums[0];
  for (var i = 1; i < nums.length; i++) {
    if(nums[i]<temp){
      temp=nums[i];
    }
  }
  return temp; //식이 없더라도 함수를 종료
  ;//인수가 몇개 있는지는 모르지만 nums 라는 배열로 받겠다.
}
var minValue = min(10, 20, 5);
document.write(minValue+'<br/>');

var ary = [];
ary[0] = 10;

var ary = [20, 30, 40, 50];

var ary = new Array(10,20, 30, 40, 50);

for (let key in ary) {
  document.write(key+'<br/>');
}

// var obj = {
//   속성 : 값,
//   속성 : 값,
//   ...
// }

var obj = {
  name: 'obj',
  value:100
}

alert(obj.name);
alert(obj.value);

for (let property in obj) {
  alert(obj[property]);
}
document.write("document wirte"+'</br>');
// funcC({name:'홍길동', age:16});

function funcD(obj){
  return {name:'홍길동', age:16};
}


/////////////////////////////////
//생성자 함수 사용하기
function Student(name, age){
  this.name = name;
  this.age = age;
}

Student.prototype.toString = function(){
  return ('name:'+this.name+', age:'+this.age);
}

var temp = new Student('hong', 20);
var temp2 = new Student('sim', 17);
alert(temp.toString());
alert(temp2.toString());
