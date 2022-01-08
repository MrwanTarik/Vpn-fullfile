$( function() {
    $( "#price-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {

        $( "#price-min" ).html( "$" + ui.values[ 0 ]);
        $( "#price-max" ).html( "$" + ui.values[ 1 ] );
      }
    });
    
    $( "#price-min" ).html($( "#price-range" ).slider( "values", 0 ));
    $( "#price-max" ).html($( "#price-range" ).slider( "values", 1 ));


    
  $( "#disk-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {

        $( "#disk-min" ).html( "$" + ui.values[ 0 ]);
        $( "#disk-max" ).html( "$" + ui.values[ 1 ] );
      }
    });
    
  $( "#disk-min" ).html($( "#disk-range" ).slider( "values", 0 ));
  $( "#disk-max" ).html($( "#disk-range" ).slider( "values", 1 ));


  $( "#ram-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {

        $( "#ram-min" ).html( "$" + ui.values[ 0 ]);
        $( "#ram-max" ).html( "$" + ui.values[ 1 ] );
      }
    });
    
    $( "#ram-min" ).html($( "#ram-range" ).slider( "values", 0 ));
    $( "#ram-max" ).html($( "#ram-range" ).slider( "values", 1 ));

    

  $( "#cpu-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {

        $( "#cpu-min" ).html( "$" + ui.values[ 0 ]);
        $( "#cpu-max" ).html( "$" + ui.values[ 1 ] );
      }
    });
    
    $( "#cpu-min" ).html($( "#cpu-range" ).slider( "values", 0 ));
    $( "#cpu-max" ).html($( "#cpu-range" ).slider( "values", 1 ));

    
    
  } );


