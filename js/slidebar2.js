// video side 2 seekbar

  var vid = document.getElementById("sidebyside-video_2");
vid.ontimeupdate = function(){
  var percentage = (vid.currentTime / vid.duration) * 100;
  $("#custom-seekbar2 span").css("width", percentage+"%");
};

$("#custom-seekbar2").hover(function(){
    $(this).find("span").addClass("hover");
}, function(){
    $(this).find("span").removeClass("hover");
})

var sliderCanMove = false;

$("#custom-seekbar2").on("mousedown", function(){
    sliderCanMove = true;
    
});

$(window).on("mousemove", function(e){
    if(sliderCanMove){
      	var offset = $("#custom-seekbar2").offset();
    	var left = ((e.clientX + offset.left));
    	var totalWidth = $("#custom-seekbar2").width();
    	var percentage = (left / totalWidth);
    	var vidTime = vid.duration * percentage;
    	vid.currentTime = vidTime;
    }
});

$(window).on("mouseup", function(){
    sliderCanMove = false;
});

$("#custom-seekbar2").on("click", function(e){
    var offset = $(this).offset();
    var left = (e.pageX - offset.left);
    var totalWidth = $("#custom-seekbar2").width();
    var percentage = (left / totalWidth);
    var vidTime = vid.duration * percentage;
    vid.currentTime = vidTime;
});

//click()
