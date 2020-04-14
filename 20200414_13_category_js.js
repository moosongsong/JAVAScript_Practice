var mainMenu = ['Programming', 'DATABASE', 'WEB'];

var menus = [
  ['java', 'c', 'c++'],
  ['mariaDB', 'Mysql', 'Oracle'],
  ['html', 'css', 'javascript', 'jquery']
];

$(document).ready(function(){
  $('#lpart').empty();
  $('<option/>',{text:'select here'}).appendTo($('#lpart'));
  $('<option/>',{text:'select here'}).appendTo($('#spart'));

  for (var i = 0; i < mainMenu.length; i++) {
    $('<option>',{text:mainMenu[i]}).appendTo($('#lpart'));
  }
  var temp = -1;
  $('#lpart').change(function(){
    temp = $('#lpart>option:selected').index();
    temp = temp-1;

    $('#spart').empty();
    $('<option/>',{text:'select here'}).appendTo($('#spart'));
    if(temp>=0){
      for (var i = 0; i < menus[temp].length; i++) {
        $('<option/>',{text:menus[temp][i]}).appendTo($('#spart'));
      }
    }




  });


});
