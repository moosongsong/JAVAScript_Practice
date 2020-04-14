window.onload = function(){
  var buttons = document.getElementsByTagName('button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function(){
      document.getElementById('prev').src = this.id;
      console.log(this);
    }
  }

  setTimeout(function(){
    buttons[0].onclick()
  }, 2000);

  document.getElementById('name').onkeyup = function(e){
    if(e.keyCode == 13){
      document.getElementById('password').focus();
    }
  }

  document.getElementById('name').onblur = function(){
    if(!this.value.trim()){
      this.focus();
    }
  }
}
