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

$( '#bs-example-navbar-collapse-1 .navbar-nav a' ).on( 'click', function () {
	$( '#bs-example-navbar-collapse-1 .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});