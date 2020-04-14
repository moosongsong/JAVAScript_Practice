var now = function() {
  let today = new Date();
  let temp = today.getHours();
  let str = '';
  if (temp < 10) {
    str += '0';
  }
  str += temp + ':';

  temp = today.getMinutes();
  if (temp < 10) {
    str += '0';
  }
  str += temp + ':';

  temp = today.getSeconds();
  if (temp < 10) {
    str += '0';
  }
  str += temp;
  return str;
}

function preLoad() {
  let cObj = document.getElementById('clock');
  setInterval(function() {
    cObj.innerHTML = now();
  }, 1000);
}
