

(function zoomL(){
/* predefine zoom and rotate */
  var zoom = 1,
      rotate = 0;
/* Grab the necessary DOM elements */
  var stage = document.getElementById('stageL'),
      v = document.getElementsByTagName('video')[0],
      controls = document.getElementsByClassName('controlsL')[0];     

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
    controls.innerHTML =                                                 
                          '<button class="zoominL">&plus;</button>' +
                          '<button class="zoomoutL">&minus;</button>' +
                          '<button class="leftL">&larr;</button>' +
                          '<button class="rightL">&rarr;</button>' +
                          '<button class="upL">&uarr;</button>' +
                          '<button class="downL">&darr;</button>' +
                          '<button class="rotateleftL">&#x21bb;</button>' +
                          '<button class="rotaterightL">&#x21ba;</button>' +
                          '<button class="resetL">RESET</button>' +
                          '<span class="drag">&nbsp&#10016;</span>';
}
      
  

/* If a button was clicked (uses event delegation)...*/
  controls.addEventListener('click',function(e){
    t = e.target;
    if(t.nodeName.toLowerCase()==='button'){
/* Check the class name of the button and act accordingly */    
      switch(t.className){
/* Increase zoom and set the transformation */
        case 'zoominL':
          zoom = zoom + 0.1;
          v.style[prop]='scale('+zoom+') rotate('+rotate+'deg)';
        break;
/* Decrease zoom and set the transformation */
        case 'zoomoutL':
          zoom = zoom - 0.1;
          v.style[prop]='scale('+zoom+') rotate('+rotate+'deg)';
        break;
/* Increase rotation and set the transformation */
        case 'rotateleftL':
          rotate = rotate + 5;
          v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')';
        break;
/* Decrease rotation and set the transformation */
        case 'rotaterightL':
          rotate = rotate - 5;
          v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')';
        break;
/* Move video around by reading its left/top and altering it */
        case 'leftL':
          v.style.left = (parseInt(v.style.left,10) - 15) + 'px';
        break;
        case 'rightL':
          v.style.left = (parseInt(v.style.left,10) + 15) + 'px';
        break;
        case 'upL':
          v.style.top = (parseInt(v.style.top,10) - 15) + 'px';
        break;
        case 'downL':
          v.style.top = (parseInt(v.style.top,10) + 15) + 'px';
        break;
/* Reset all to default */
        case 'resetL':
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


