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
   $( function() {
    $(".popover").draggable();
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
/*
$(document).ready(function() {
   $('[data-toggle="popover"]').popover({
      placement: 'top',
      trigger: 'hover'
   });
});
*/


/*$(".dropbtn").popover({
        html : true,
        placement: 'left',
        trigger: 'click',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        
}).data('bs.popover').tip().attr('id', 'mypop');

/// video try ///

let html1 = `
    <div style="min-width: 300px;">
      <div class="embed-responsive embed-responsive-16by9">
        <video class="embed-responsive-item" src=".../...mp4" loop muted></video>
      </div>
    </div>
    `;

    $('#popover').popover({
      trigger: 'manual',
      html: true,
      sanitize: false,
      content: html1
    });
    
///

*/

///


$(document).ready(function() {

 $('[data-toggle="popover"]').popover({
    placement: 'top',
    html: true,
    sanitize: false,
     

    
    title:function(){
          return $('.popover-title').html();
       },
       content:video
  });

/*  $('[data-toggle="popover"]').on("mouseenter", function() {
    $(this).popover('show');
  });

  $('[data-toggle="popover"]').on("click", function() {
    $(this).popover('show');
*/

  $('[data-toggle="popover"]').on("click", function() {
    $(this).popover('show');
           
 //   setTimeout(function () {
 //           timeout = $('.popover').fadeOut(120000);
 //       }, 5000);
    
  });





  
  $('body').on('click', function(e) {
       
   
    $('[data-toggle=popover]').each(function() {
       
      if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
        $(this).popover('hide');
        }
    });
  });
});


/// popver2 ////

$(document).ready(function() {
   
  $('[data-toggle="popover2"]').popover({
    placement: 'top',
    html: true
  });

/*  $('[data-toggle="popover"]').on("mouseenter", function() {
    $(this).popover('show');
  });

  $('[data-toggle="popover"]').on("click", function() {
    $(this).popover('show');
*/

  $('[data-toggle="popover2"]').on("mouseenter", function() {
    $(this).popover('show');
           
    setTimeout(function () {
            timeout = $('.popover2').fadeOut(120000);
        }, 5000);
    
  });

  
  $('#wrapR, #wrapL').on('mouseenter', function(e) {
         
    $('[data-toggle=popover2]').each(function() {
       
      if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover2').has(e.target).length === 0) {
        $(this).popover('hide');
      }
    });
  });
});




//  closbnt2 script below //

var close = document.getElementsByClassName('closebtn2');
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.opacity = "0";
        setTimeout(function(){ div.style.display = "none"; }, 1600);
    }
}
