$( document ).ready(function() {

  var fitImage = function () {

    var imgH = $("#score-sheet-image").height();
  var imgW = $("#score-sheet-image").width();
  if(imgW > imgH) {
    $("#score-sheet-wrapper img,#score-sheet-form").css("height", "100%");
    var conWidth = $("#score-sheet-wrapper").width();
    var imgWidth = $("#score-sheet-image").width();
    var gap = (imgWidth - conWidth)/2;
    $("#score-sheet-wrapper img").css("margin-left", -(gap - 30));
    console.log($("#score-sheet-image").width());
    $("#score-sheet-form").css({"width": $("#score-sheet-image").width() + 'px',"left" : '50%',"transform" : 'translateX(-50%)','margin-left':'30px'});
    init();
  } else {
    $("#score-sheet-wrapper img,#score-sheet-form").css("width", "100%");
    var conHeight = $("#score-sheet-wrapper").height();
    var imgHeight = $("#score-sheet-wrapper img").height();
    var gap = (imgHeight - conHeight)/2;
    $("#score-sheet-wrapper img").css("margin-top", -(gap + 30));
      $("#score-sheet-form").css({"height": $("#score-sheet-wrapper img").height() + 'px',"top" : '50%',"transform" : 'translateY(-50%)','margin-top':'30px'});
      init();
  }

  }

  fitImage();

  $( window ).resize(function() {
    fitImage();
  });

  $('#clr').on('click',function(){
    clearArea();
  });

  var mousePressed = false;
var lastX, lastY;
var ctx;

function init(canvasWidth, canvasHeight) {
    ctx = document.getElementById('score-sheet-form').getContext("2d");
    ctx.canvas.width  = $("#score-sheet-form").width();
    ctx.canvas.height = $("#score-sheet-form").height();

    $('#score-sheet-form').mousedown(function (e) {
        mousePressed = true;
        Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
    });

    $('#score-sheet-form').mousemove(function (e) {
        if (mousePressed) {
            Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
        }
    });

    $('#score-sheet-form').mouseup(function (e) {
        mousePressed = false;
    });
	    $('#score-sheet-form').mouseleave(function (e) {
        mousePressed = false;
    });
}

function Draw(x, y, isDown) {
    if (isDown) {
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.lineJoin = "round";
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();
    }
    lastX = x; lastY = y;
}

function clearArea() {
    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

});
