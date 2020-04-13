var clockID = null;

function start(){
  clockID = setInterval(function(){
    let today = new Date();
    let clockStr = today.getFullYear()+'-';
    clockStr += (today.getMonth()+1 < 10)? '0'+(today.getMonth()+1) :today.getMonth()+1;
    clockStr += '-';
    clockStr += today.getDate()+' ';
    clockStr += today.getHours()+':';
    clockStr += today.getMinutes()+':';
    clockStr += today.getSeconds();

    document.getElementById('clock').value = clockStr;
  }, 500);
}

// document.onload = start();//문서를 다 받고 난 후, start를 실행하라는 뜻.
// document.getElementById('clockStart').onclick = start();
// document.getElementById('clockStop').onclick = function(){
//   clearInterval(clockID);
// }

function stop(){
  clearInterval(clockID);
}
