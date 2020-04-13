var originIMG = 'jin.jpg';

function change(obj, chImg){
  console.log(obj);
  if(chImg){
    originIMG = document.getElementById('image').src;
    document.getElementById('image').src = chImg;
  }
  else{
    document.getElementById('image').src = originIMG;
  }
}

function func2(){
  console.log(document.getElementById('image'));
  document.getElementById('image').src = originIMG;
}

function change2(obj, chImg){
  console.log(obj);
  if(chImg){
    originIMG = obj.src;
    obj.src = chImg;
  }
  else{
    obj.src = originIMG;
  }
}

//document.getElementById('fileName').value;
function change3(){
  //id가 fileName인 입력필드의 값을 alert로 출력
  alert(document.getElementById('fileName').value);
  //id가 image인 요소의 src 속성값을 alert로 출력
  alert(document.getElementById('iamge').src);
  var temp;
  temp = document.getElementById('fileName').value;
  document.getElementById('image').src = temp;
  ;
}
