$(document).ready(function(){
  var active;
  // When clicking one of the navigation buttons
  $('nav a').on('click', function(){
    href = $(this).attr('href');
    $('section.level').hide();
    $('section.main').hide();
    if (active != null) {$(active).hide();}
    $(href).show();
    active = href;
  });
  // When clicking the show all button
  $('#showall').on('click', function() {
    $('section.level').show();
    removeHash();
  });

  if (window.location.hash != "") {
    $('section.level').hide();
    $(window.location.hash).show();
  }

  function removeHash () {
    history.pushState("", document.title, window.location.pathname + window.location.search);
  }
});
