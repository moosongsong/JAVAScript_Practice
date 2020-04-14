var menus = [
  ['java', 'c', 'c++'],
  ['mariaDB', 'Mysql', 'Oracle'],
  ['html', 'css', 'javascript', 'jquery']
];

$(document).ready(function(){
  var str;
  $('#lpart').change(function(){
    // console.log.($('#lpart>option:selected').index());
    // str = console.log($(this).find('option:selected').text());
    str = $(this).find('option:selected').text();
    var temp = -1;

    if(str=='Programming'){
      temp = 0;
    }
    else if(str=='DATABASE'){
      temp = 1;
    }
    else if(str=='WEB'){
      temp = 2;
    }
    else{
      temp = -1;
    }

    var obj = ($('select#spart'));
    obj.empty();
    $('<option/>',{text:'select here'}).appendTo(obj);
    if(temp>=0){
      for (var i = 0; i < menus[temp].length; i++) {
        $('<option/>',{text:menus[temp][i]}).appendTo(obj);
      }
    }




  });


});
