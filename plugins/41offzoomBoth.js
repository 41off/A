

(function zoomR(){
/* predefine zoom and rotate */
  var zoomR = 1,
      rotateR = 0;
/* Grab the necessary DOM elements */
  var stageR = document.getElementById('stageR'),
      vR = document.getElementsByTagName('video')[1],
      controlsR = document.getElementsByClassName('controlsR')[0];     

/* Array of possible browser specific settings for transformation */
  var propertiesR = ['transform', 'WebkitTransform', 'MozTransform',
                    'msTransform', 'OTransform'],
      propR = propertiesR[0];
/* Iterators and stuff */    
  var iR,jR,tR;
 
  
/* Find out which CSS transform the browser supports */
  for(iR=0,jR=propertiesR.length;iR<jR;iR++){
    if(typeof stageR.style[propertiesR[iR]] !== 'undefined'){
      propR = propertiesR[iR];
      break;
    }
  }
/* Position video */
  vR.style.left = 0;
  vR.style.top = 0;
/* If there is a controls element, add the player buttons */
   if(controlsR){
    controlsR.innerHTML =                                                  
                          '<button class="zoomin">&plus;</button>' +
                          '<button class="zoomout">&minus;</button>' +
                          '<button class="left">&larr;</button>' +
                          '<button class="right">&rarr;</button>' +
                          '<button class="up">&uarr;</button>' +
                          '<button class="down">&darr;</button>' +
                          '<button class="rotateleft">&#x21bb;</button>' +
                          '<button class="rotateright">&#x21ba;</button>' +
                          '<button class="reset">RESET</button>';
}
      
  

/* If a button was clicked (uses event delegation)...*/
  controlsR.addEventListener('click',function(e){
    tR = e.target;
    if(tR.nodeName.toLowerCase()==='button'){
/* Check the class name of the button and act accordingly */    
      switch(tR.className){
/* Increase zoom and set the transformation */
        case 'zoomin':
          zoomR = zoomR + 0.1;
          vR.style[propR]='scale('+zoomR+') rotate('+rotateR+'deg)';
        break;
/* Decrease zoom and set the transformation */
        case 'zoomout':
          zoomR = zoomR - 0.1;
          vR.style[propR]='scale('+zoomR+') rotate('+rotateR+'deg)';
        break;
/* Increase rotation and set the transformation */
        case 'rotateleft':
          rotateR = rotateR + 5;
          vR.style[propR]='rotate('+rotateR+'deg) scale('+zoomR+')';
        break;
/* Decrease rotation and set the transformation */
        case 'rotateright':
          rotateR = rotateR - 5;
          vR.style[propR]='rotate('+rotateR+'deg) scale('+zoomR+')';
        break;
/* Move video around by reading its left/top and altering it */
        case 'left':
          vR.style.left = (parseInt(vR.style.left,10) - 15) + 'px';
        break;
        case 'right':
          vR.style.left = (parseInt(vR.style.left,10) + 15) + 'px';
        break;
        case 'up':
          vR.style.top = (parseInt(vR.style.top,10) - 15) + 'px';
        break;
        case 'down':
          vR.style.top = (parseInt(vR.style.top,10) + 15) + 'px';
        break;
/* Reset all to default */
        case 'reset':
          zoomR = 1;
          rotateR = 0;
          vR.style.top = 0 + 'px';
          vR.style.left = 0 + 'px';
          vR.style[propR]='rotate('+rotateR+'deg) scale('+zoomR+')';
        break;
      }        
      e.preventDefault();
    }
  },false);
})();


