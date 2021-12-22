  
 
  
  (function localFilePlayerR() {
	        'use strict'
             var R_URL = window.URL || window.webkitURL
             var displayMessageR = function (messageR, isErrorR) {
             var element = document.querySelector('#messageR');
                 element.innerHTML = messageR
                 element.className = isErrorR ? 'error' : 'info'
     }
             var playSelectedFileR = function (event) {
             var fileR = this.files[0]
             var typeR = fileR.type
             var videoNodeR = document.getElementsByTagName('video')[1];
             var canPlayR = videoNodeR.canPlayType(typeR);
             if (canPlayR === '') canPlayR = 'No'
             var messageR = 'Can play type "' + typeR + '": Yes ' 
             var isErrorR = canPlayR === 'No: .mp4 video files only'
    displayMessageR(messageR, isErrorR)

    if (isErrorR) {
      return
    }

    var fileR_URL = R_URL.createObjectURL(fileR);
    videoNodeR.src = fileR_URL
  }
  var inputNodeR = document.querySelector("div#stageR input[name='video']");
  inputNodeR.addEventListener('change', playSelectedFileR, false)

})()


// experiment below

//   Selectors can also be really powerful, as demonstrated in the following example. 
//   Here, the first <input> element with the name "login" (<input name="login"/>) located inside a <div> whose class is "user-panel main" (<div class="user-panel main">)
//   in the document is returned:

//  var el = document.querySelector("div.user-panel.main input[name='login']");
