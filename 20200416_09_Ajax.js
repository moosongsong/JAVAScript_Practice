$(document).ready(function(){
  let temp = 'http://127.0.0.1:3000/20200416_javaScript/20200416_09_Ajax.txt';

  //$.ajax() 메소드를 이용하여 txt 파일을 요청하여
  $.ajax({
    url : temp
  }).done(function(data){
    let obj = eval('('+data+')');
    for (var i = 0; i < obj.length; i++) {
      let img = $('<img/>', {src : obj[i].file});
      img.css("width", "50px").click(
        function(){
          $('.prev').find('img').attr("src", this.src);
        }
      );
      $('.thumb').append(img);
    }
  });
  //서버가 응답한 데이터를 이용하여 thumb영역에 작은 이미지를 추가한다.

  //thumb영역에 추가된 이미지를 클릭하면 클릭된 이미지로
  //prev 이미지를 변경
});
