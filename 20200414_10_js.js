$(document).ready(function() {
  var obj = $('<div/>', {
    id: 'content'
  }).appendTo($('body'));
  // obj.text('insert content');
  obj.html('<div>dldldl</div>');
  obj.html('<div>RNfRNf</div>');
});

var students = [{
    name: 'hong',
    id: 'h'
  },
  {
    name: 'sim',
    id: 's'
  },
  {
    name: 'kim',
    id: 'k'
  },
  {
    name: 'choi',
    id: 'ch'
  },
  {
    name: 'lee',
    id: 'l'
  },
];

$(document).ready(function() {
  var obj = $('<select/>').appendTo($('body'));
  for (var i = 0; i < students.length; i++) {
    $('<option/>', {value: students[i].id, text:students[i].name}).appendTo(obj);
  }
});
