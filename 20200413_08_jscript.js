//객체를 만들어 사용하기.
var obj = {
  name: 'ECMAScript',
  version: 1,
  info: function(){
    document.write(this.name+2020+'<br/>');
  }
};

document.write(obj.name+'<br/>');
document.write(obj['version']+'<br/>');
obj.info();

with(obj){
  document.write(name+'<br/>');
  document.write(version+'<br/>');
  info();
}

var student = {};

// with (student){
//   name = 'hong';
//   majot = 'SW';
//   grade = 3;
// }//사용불가????

student.name = 'hong';
student.major = 'SW';
student.grade = 3;

delete student.major;
document.write('<br/>');
for(var key in student){
  document.writeln(key+' : '+student[key]+'<br/>');
}

document.write('<br/>');

function funcOBJ(obj){
  document.writeln(obj.name + '<br/>');
  document.writeln(obj.major + '<br/>');
  document.writeln(obj.grade + '<br/>');
}
document.write('<br/>');
funcOBJ(student);
document.write('<br/>');
funcOBJ({name : 'kim', major : 'CS', grade:1});

function getOBJ(){
  return {name : 'Lee', major : 'EN', grade:2};
}
document.write('<br/>');
var obj = getOBJ();
funcOBJ(obj);
