  var vid1 = document.getElementById("sidebyside-video_1");
vid1.ontimeupdate = function(){
  var percentage = ( vid1.currentTime / vid1.duration ) * 100;
  $("#custom-seekbar span").css("width", percentage+"%");
};

$("#custom-seekbar").hover(function(){
    $(this).find("span").addClass("hover");
}, function(){
    $(this).find("span").removeClass("hover");
})

var sliderCanMove = false;

$("#custom-seekbar").on("mousedown", function(){
    sliderCanMove = true;
    
});

$(window).on("mousemove", function(e){
    if(sliderCanMove){
      	var offset = $("#custom-seekbar").offset();
    	var left = ((e.clientX + offset.left));
    	var totalWidth = $("#custom-seekbar").width();
    	var percentage = ( left / totalWidth );
    	var vid1Time = vid1.duration * percentage;
    	vid1.currentTime = vid1Time;
    }
});

$(window).on("mouseup", function(){
    sliderCanMove = false;
});

$("#custom-seekbar").on("click", function(e){
    var offset = $(this).offset();
    var left = (e.pageX - offset.left);
    var totalWidth = $("#custom-seekbar").width();
    var percentage = ( left / totalWidth );
    var vid1Time = vid1.duration * percentage;
    vid1.currentTime = vid1Time;
});

//click()
