$( document ).ready(function() {

  var fitImage = function () {

    var conHeight = $("#score-sheet-wrapper").height();
    var imgHeight = $("#score-sheet-image").height();
    var gap = (imgHeight - conHeight) / 2;
    $("#score-sheet-image").css("margin-top", -gap);
    console.log('here');

  }

  fitImage();

  $( window ).resize(function() {
    fitImage();
  });

});
