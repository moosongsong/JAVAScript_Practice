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

function stop(){
  clearInterval(clockID);
}

var calc = function(){
  let str = document.getElementById('exp').value;
  document.getElementById('result').value = eval(str);
}

function func(callFunc){
  callFunc();
}
func(function(){
  alert('call Func');
});
