document.addEventListener("DOMContentLoaded", function() {
  var canvas = document.getElementById('logicCanvas');
  var ctx = canvas.getContext('2d');

  // Function to draw AND gate
  function drawANDGate(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 50, y);
    ctx.lineTo(x + 50, y + 100);
    ctx.lineTo(x, y + 100);
    ctx.closePath();
    ctx.stroke();
    // Arc for AND gate
    ctx.beginPath();
    ctx.arc(x + 50, y + 50, 50, 1.5 * Math.PI, 0.5 * Math.PI, false);
    ctx.stroke();
  }

  // Function to draw OR gate
  function drawORGate(x, y) {
    ctx.beginPath();
    // OR gate complex shape can be drawn here, for simplicity, we use rectangles
    ctx.strokeRect(x, y, 50, 100);
    ctx.stroke();
  }

  // Function to draw NOT gate (Inverter)
  function drawNOTGate(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 50, y + 50);
    ctx.lineTo(x, y + 100);
    ctx.closePath();
    ctx.stroke();
    // Circle for NOT gate
    ctx.beginPath();
    ctx.arc(x + 60, y + 50, 10, 0, 2 * Math.PI, false);
    ctx.stroke();
  }

  // Draw the gates
  drawANDGate(100, 50);
  drawORGate(200, 150);
  drawNOTGate(300, 250);

  // Draw connections
  // Using moveTo and lineTo to draw lines between the gates
  ctx.beginPath();
  ctx.moveTo(150, 100); // End of AND gate
  ctx.lineTo(200, 175); // Start of OR gate
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(250, 175); // End of OR gate
  ctx.lineTo(300, 275); // Start of NOT gate
  ctx.stroke();

  // Draw input/output lines
  ctx.beginPath();
  ctx.moveTo(50, 75); // Input line for AND gate
  ctx.lineTo(100, 75); // Starting point on AND gate
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(360, 275); // Output line from NOT gate
  ctx.lineTo(400, 275); // End point
  ctx.stroke();

  // Add text labels
  ctx.font = "16px Arial";
  ctx.fillText("P", 30, 80);
  ctx.fillText("Q", 30, 105);
  ctx.fillText("R", 30, 130);
  ctx.fillText("Output", 410, 280);
});
