(function(){
/* predefine zoom and rotate */
  var zoom = 1,
      rotate = 0;
/* Grab the necessary DOM elements */
  var stage = document.getElementById('stage'),
      v = document.getElementsByTagName('video')[0],
      controls = document.getElementsByClassName('controls')[0];     

/* Array of possible browser specific settings for transformation */
  var properties = ['transform', 'WebkitTransform', 'MozTransform',
                    'msTransform', 'OTransform'],
      prop = properties[0];
/* Iterators and stuff */    
  var i,j,t;
 
  
/* Find out which CSS transform the browser supports */
  for(i=0,j=properties.length;i<j;i++){
    if(typeof stage.style[properties[i]] !== 'undefined'){
      prop = properties[i];
      break;
    }
  }
/* Position video */
  v.style.left = 0;
  v.style.top = 0;
/* If there is a controls element, add the player buttons */
   if(controls){
    controls.innerHTML =  '<span class="closebtn2">&#11097;</span>'+
                          '<br><center>Zoom Controls</center>'+                         
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
  controls.addEventListener('click',function(e){
    t = e.target;
    if(t.nodeName.toLowerCase()==='button'){
/* Check the class name of the button and act accordingly */    
      switch(t.className){
/* Increase zoom and set the transformation */
        case 'zoomin':
          zoom = zoom + 0.1;
          v.style[prop]='scale('+zoom+') rotate('+rotate+'deg)';
        break;
/* Decrease zoom and set the transformation */
        case 'zoomout':
          zoom = zoom - 0.1;
          v.style[prop]='scale('+zoom+') rotate('+rotate+'deg)';
        break;
/* Increase rotation and set the transformation */
        case 'rotateleft':
          rotate = rotate + 5;
          v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')';
        break;
/* Decrease rotation and set the transformation */
        case 'rotateright':
          rotate = rotate - 5;
          v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')';
        break;
/* Move video around by reading its left/top and altering it */
        case 'left':
          v.style.left = (parseInt(v.style.left,10) - 15) + 'px';
        break;
        case 'right':
          v.style.left = (parseInt(v.style.left,10) + 15) + 'px';
        break;
        case 'up':
          v.style.top = (parseInt(v.style.top,10) - 15) + 'px';
        break;
        case 'down':
          v.style.top = (parseInt(v.style.top,10) + 15) + 'px';
        break;
/* Reset all to default */
        case 'reset':
          zoom = 1;
          rotate = 0;
          v.style.top = 0 + 'px';
          v.style.left = 0 + 'px';
          v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')';
        break;
      }        
      e.preventDefault();
    }
  },false);
})();

var close = document.getElementsByClassName('closebtn2');
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.opacity = "0";
        setTimeout(function(){ div.style.display = "none"; }, 1200);
    }
}

