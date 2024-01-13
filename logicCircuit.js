document.addEventListener("DOMContentLoaded", function() {
  var canvas = document.getElementById('logicCanvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    // Helper function to draw a line
    function drawLine(startX, startY, endX, endY) {
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    }

    // Helper function to draw an inverter circle (for NOT operation)
    function drawInverter(x, y) {
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Draw NOR gate for (P ↓ Q)
    ctx.beginPath();
    ctx.moveTo(50, 50); // Start at top left
    ctx.lineTo(100, 50); // Draw top side
    ctx.lineTo(100, 100); // Draw right side
    ctx.lineTo(50, 100); // Draw bottom side
    ctx.closePath(); // Close the path to draw left side
    ctx.stroke();
    drawInverter(100, 75); // Inverter circle at the output of the NOR gate

    // Draw AND gate for (¬Q ∧ R)
    ctx.beginPath();
    ctx.moveTo(50, 150); // Start at top left
    ctx.lineTo(100, 150); // Draw top side
    ctx.lineTo(100, 200); // Draw right side
    ctx.lineTo(50, 200); // Draw bottom side
    ctx.closePath(); // Close the path to draw left side
    ctx.stroke();

    // Draw OR gate for the whole expression
    ctx.beginPath();
    ctx.moveTo(150, 100); // Start at top left
    ctx.lineTo(200, 100); // Draw top side
    ctx.lineTo(200, 200); // Draw right side
    ctx.lineTo(150, 200); // Draw bottom side
    ctx.closePath(); // Close the path to draw left side
    ctx.stroke();

    // Draw NOT gate for the negation of the whole expression
    ctx.beginPath();
    ctx.moveTo(250, 150); // Start at top
    ctx.lineTo(300, 150); // Draw right side
    ctx.lineTo(250, 200); // Draw left side
    ctx.closePath(); // Close the path
    ctx.stroke();
    drawInverter(300, 175); // Inverter circle at the output of the NOT gate

    // Draw lines connecting the gates
    drawLine(100, 75, 150, 75); // Line from NOR to OR
    drawLine(100, 175, 150, 175); // Line from AND to OR
    drawLine(200, 150, 250, 150); // Line from OR to NOT

    // Draw input lines for P, Q, and R
    drawLine(0, 50, 50, 50); // Input line for P
    drawLine(0, 75, 50, 75); // Input line for Q
    drawLine(0, 175, 50, 175); // Input line for R

    // Output line from the NOT gate
    drawLine(300, 175, 350, 175); // Output line

    // Label the inputs and output
    ctx.fillText('P', 10, 55);
    ctx.fillText('Q', 10, 80);
    ctx.fillText('¬Q', 10, 180);
    ctx.fillText('R', 10, 205);
    ctx.fillText('Output', 355, 180);
  }
});
