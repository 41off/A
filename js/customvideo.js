(function() {
    var video = document.getElementById('video')
        vendorUrl = window.URL || window.webkitURL;
        
     navigator.getMedia = navigator.getUserMedia ||
                          navigator.webkitgetUserMedia ||
                          navigator.mozgetUserMedia ||
                          navigator.msgetUserMedia;
                          
      // Captue Video
      navigator.getMedia({
           video:true,
           audio: false
      }, function(stream) {
          video.src = vendorUrl.createObjectURL(stream);
          video.play();
      }, function(error) {
          // An error ocuured
          // error.code
      });
      
})();
      
           
     
                           