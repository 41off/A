/// uses jquery and jquery ui from 2021



   $( function() {
    $(".controlsL").draggable();
} );
//   $( function() {
//    $(").draggable({axis:"x"});
//  } );
   $( function() {
    $(".menubarB").draggable();
} );
   $( function() {
    $(".menubarL").draggable();
} );
   $( function() {
    $(".menubarR").draggable();
} );
   $( function() {
    $("#d3").draggable({axis :"y"});
} );
   $( function() {
    $(".controlsR").draggable();
} );
   $( function() {
    $(".timer").draggable();
} );
   $( function() {
    $(".timerR").draggable();
} );
   $( function() {
    $(".toolblock").draggable();
} );


/// dropdown drag option ///

   $( function() {
    $(".dropdownL").draggable();
} );

   $( function() {
    $(".dropdownR").draggable();
} );

$( function() {
    $( ".dirbtn" ).draggable();
  } );


$( function() {
    $( ".paperscriptL" ).resizable({axis :"y"});
  } );


//   popup modal script below //

$(document).ready(function() {
   $('[data-toggle="popover"]').popover({
      placement: 'top',
      trigger: 'hover'
   });
});


//  closbnt2 script below //

var close = document.getElementsByClassName('closebtn2');
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.opacity = "0";
        setTimeout(function(){ div.style.display = "none"; }, 1200);
    }
}
