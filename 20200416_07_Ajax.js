$(document).ready(function(){
  let temp = 'http://127.0.0.1:3000/20200416_javascript/20200416_07_Ajax_data.txt';
  // $.ajax({url : temp
  //   // ,dataType:'json'
  // }).done(function(data){
  //
  //   let obj = eval('('+data+')');
  //
  //   $('#content').val(data);
  //   // $('#content').val('이름:'+obj.name);
  //   // $('#content').val('나이:'+obj.age);
  // });
  $('textarea').load(temp, function(){
    ;
  });
});
