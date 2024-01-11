document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("watch-canvas");
    const ctx = canvas.getContext("2d");

// Set canvas dimensions
canvas.width = 150;
canvas.height = 150;

// Function to draw the watch
function drawWatch() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Background color
  ctx.fillStyle = "#2095F2"; // PANTONE Red 032 C
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Watch face
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, 2 * Math.PI);
  ctx.fillStyle = "#fff"; // White face
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#000"; // Black outline
  ctx.stroke();

  // Hour markers
  for (let i = 0; i < 12; i++) {
    const angle = (Math.PI / 6) * i;
    const x = canvas.width / 2 + 80 * Math.cos(angle);
    const y = canvas.height / 2 + 80 * Math.sin(angle);
    ctx.fillStyle = "#000"; // Black markers
    ctx.fillRect(x - 4, y - 4, 8, 8);
  }

  // Hands
   const now = new Date();
   const offsetIST = 5.5 * 60 * 60 * 1000; // Offset for IST in milliseconds
   const adjustedNow = new Date(now.getTime() + offsetIST);
   const hour = adjustedNow.getHours();
   const minute = adjustedNow.getMinutes();
   const second = adjustedNow.getSeconds();


  // Hour hand
  const hourAngle = (Math.PI / 6) * (hour + minute / 60);
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, canvas.height / 2);
  ctx.lineTo(
    canvas.width / 2 + 80 * Math.cos(hourAngle),
    canvas.height / 2 + 80 * Math.sin(hourAngle)
  );
  ctx.strokeStyle = "#000"; // Black hour hand
  ctx.lineWidth = 8;
  ctx.stroke();

  // Minute hand
  const minuteAngle = (Math.PI / 30) * minute;
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, canvas.height / 2);
  ctx.lineTo(
    canvas.width / 2 + 20 * Math.cos(minuteAngle),
    canvas.height / 2 + 20 * Math.sin(minuteAngle)
  );
  ctx.strokeStyle = "#fff"; // White minute hand
  ctx.lineWidth = 4;
  ctx.stroke();

  // Second hand
  const secondAngle = (Math.PI / 30) * second;
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, canvas.height / 2);
  ctx.lineTo(
    canvas.width / 2 + 80 * Math.cos(secondAngle),
    canvas.height / 2 + 80 * Math.sin(secondAngle)
  );
  ctx.strokeStyle = "#000"; // Black second hand
  ctx.lineWidth = 2;
  ctx.stroke();

  // Center dot
  ctx.fillStyle = "#000";
  ctx.fillRect(canvas.width / 2 - 2, canvas.height / 2 - 2, 4, 4);
}

// Draw the watch initially
drawWatch();

// Update the watch every second
setInterval(drawWatch, 1000);

});