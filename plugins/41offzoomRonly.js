

(function zoomR(){
/* predefine zoom and rotate */
  var zoomR = 1,
      rotateR = 0;
/* Grab the necessary DOM elements */
  var stageR = document.getElementById('stageR'),
      vR = document.getElementsByTagName('video')[0],
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
                          '<button class="zoominR">&plus;</button>' +
                          '<button class="zoomoutR">&minus;</button>' +
                          '<button class="leftR">&larr;</button>' +
                          '<button class="rightR">&rarr;</button>' +
                          '<button class="upR">&uarr;</button>' +
                          '<button class="downR">&darr;</button>' +
                          '<button class="rotateleftR">&#x21bb;</button>' +
                          '<button class="rotaterightR">&#x21ba;</button>' +
                          '<button class="resetR">RESET</button>' +
                          '<span class="drag">&nbsp&#10016;</span>';
}
      
  

/* If a button was clicked (uses event delegation)...*/
  controlsR.addEventListener('click',function(e){
    tR = e.target;
    if(tR.nodeName.toLowerCase()==='button'){
/* Check the class name of the button and act accordingly */    
      switch(tR.className){
/* Increase zoom and set the transformation */
        case 'zoominR':
          zoomR = zoomR + 0.1;
          vR.style[propR]='scale('+zoomR+') rotate('+rotateR+'deg)';
        break;
/* Decrease zoom and set the transformation */
        case 'zoomoutR':
          zoomR = zoomR - 0.1;
          vR.style[propR]='scale('+zoomR+') rotate('+rotateR+'deg)';
        break;
/* Increase rotation and set the transformation */
        case 'rotateleftR':
          rotateR = rotateR + 5;
          vR.style[propR]='rotate('+rotateR+'deg) scale('+zoomR+')';
        break;
/* Decrease rotation and set the transformation */
        case 'rotaterightR':
          rotateR = rotateR - 5;
          vR.style[propR]='rotate('+rotateR+'deg) scale('+zoomR+')';
        break;
/* Move video around by reading its left/top and altering it */
        case 'leftR':
          vR.style.left = (parseInt(vR.style.left,10) - 15) + 'px';
        break;
        case 'rightR':
          vR.style.left = (parseInt(vR.style.left,10) + 15) + 'px';
        break;
        case 'upR':
          vR.style.top = (parseInt(vR.style.top,10) - 15) + 'px';
        break;
        case 'downR':
          vR.style.top = (parseInt(vR.style.top,10) + 15) + 'px';
        break;
/* Reset all to default */
        case 'resetR':
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


