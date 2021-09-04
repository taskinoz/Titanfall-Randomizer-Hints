$(document).ready(function(){
  var active;
  $('nav a').on('click', function(){
    href = $(this).attr('href');
    $('container section').hide();
    if (active != null) {$(active).hide();}
    $(href).show();
    active = href;
  })
})
