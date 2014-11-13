$(function() {
    var cache = {};
    $( "#mstrversion" ).autocomplete({
      minLength: 1,
      source: function( request, response ) {
        var term = request.term;
        if ( term in cache ) {
          response( cache[ term ] );
          return;
        }
 
        $.getJSON( "./data/products.json", function(data) {
          cache[ term ] = data;
          console.log(data);
          response( data.products );
        });
      }
    });
  });