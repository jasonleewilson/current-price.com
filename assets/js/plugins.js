$('.footable').footable({
  calculateWidthOverride: function() {
  return {width: $(window).width()};
}
}); 

$( ".btn-night" ).click(function() {
  $( "body" ).toggleClass('night-mode');
});

$('.selectpicker').val('100');
$('.selectpicker').selectpicker('render');