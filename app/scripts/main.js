'use strict';

function ready(fn) {
  if ( document.readyState !== 'loading' ) {
    fn();
  } else if ( document.addEventListener ) {
    document.addEventListener( 'DOMContentLoaded', fn );
  } else {
    document.attachEvent( 'onreadystatechange', function() {
      if ( document.readyState !== 'loading' ) {
        fn();
      }
    });
  }
}

function forEachElement(selector, fn) {
  var elements = document.querySelectorAll(selector);
  for (var i = 0; i < elements.length; i++) {
    fn(elements[i], i);
  }
}

ready( function(){
  console.debug( 'DOM is ready' );

  forEachElement('.about-tabs__thumb', function(el, i){
    el.addEventListener( 'click', function( e ) {
      console.debug( e + ': ' + '(' + i + ') ' + el );
    } );
  });

});

