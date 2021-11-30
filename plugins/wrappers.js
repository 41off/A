function q(event) {
  event = event || window.event;

  var canvas = document.getElementById('canvas-wrapper'),
    x = event.pageX - canvas.offsetLeft,
    y = event.pageY - canvas.offsetTop;

  var div = document.createElement('div');
  div.style.position = "absolute";
  div.style.background = 'red';
  div.style.width = '10px';
  div.style.height = '10px';
  div.style.left = x + 'px';
  div.style.top = y + 'px';

  canvas.appendChild(div);
}

var canvas = document.getElementById('canvas-wrapper');
canvas.addEventListener('click', q);

function w(event) {
  event = event || window.event;

  var canvas = document.getElementById('canvas-wrapper2'),
    x = event.pageX - canvas.offsetLeft,
    y = event.pageY - canvas.offsetTop;

  var div = document.createElement('div');
  div.style.position = "absolute";
  div.style.background = 'red';
  div.style.width = '10px';
  div.style.height = '10px';
  div.style.left = x + 'px';
  div.style.top = y + 'px';

  canvas.appendChild(div);
}

var canvas = document.getElementById('canvas-wrapper2');
canvas.addEventListener('click', w);