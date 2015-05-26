// WARENA

function createGridAtCanvas(id) {
  var canvas = document.getElementById(id);
  var context = canvas.getContext('2d');

  var numberOfSides = 6,
      size = 40,
      Xcenter = 100,
      Ycenter = 100;

  context.beginPath();
  context.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));

  for (var i = 1; i <= numberOfSides;i += 1) {
      context.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
  }

  context.strokeStyle = "#000000";
  context.lineWidth = 1;
  context.stroke();
}

createGridAtCanvas('hex');
