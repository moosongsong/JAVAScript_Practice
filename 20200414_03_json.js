var student = {
    name : 'hong',
    age : 20,
    isHungry : false,
    family:['dad', 'mom', 'me'],
    mom : { name : 'mom',
          age : 50
    }
}

var jsonSt = JSON.stringify(student);
var jst = JSON.parse(jsonSt);

function preLoad(){
  console.log(student);
  console.log(jsonSt);
  document.write(jsonSt + '<br/>');
  document.write(jst.name + '<br/>');
  document.write(jst.age + '<br/>');
  document.write(jst.isHungry + '<br/>');
}
