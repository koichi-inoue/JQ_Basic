$( function() {

  $( '#buttonHeader' ).click( function() {
    $( 'h1' ).text( 'Hello jQuery!' );
  });

  $( '#buttonArticle' ).click( function() {
    $( 'article' ).css({
      'color': 'white',
      'background-color': 'red'
    });
  });

  $( '#buttonFooter' ).click( function() {
    $( 'footer' ).html('<p><a href="https://www.kyusan-u.ac.jp">Kyushu Sangyo University</a></p>' );
    $( 'footer a' ).css( 'color','red' );
  });

  $( '#buttonLeft' ).click( function() {
    $('main').css( 'flex-direction','row' );
  });

  $( '#buttonVertical' ).click( function() {
    $('main').css( 'flex-direction','column' );
  });

  $( '#buttonRight' ).click( function() {
    $('main').css( 'flex-direction','row-reverse' );
  });

});
