
console.log(screen);

console.log(window);

// setTimeout(function(){
//   window.location.href = 'http://google.com';
// },3000);
//3초후 구글로 이동

window.onresize = function(){
  document.write(window.innerWidth+'<br/>');
}//이벤트 핸들러 함수

function openGoogle(){
  // window.open(url, windowObjectName, windowProperties);
  window.open('http://www.google.com', 'googleWin', 'width=600, height=500, menubar = no');
}
