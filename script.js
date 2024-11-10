document.getElementById("animateBtn").addEventListener("click", function () {
  const balloonsContainer = document.getElementById("balloons");
  balloonsContainer.innerHTML = "";

  // Balloon colors
  const colors = [
    "#ff4081",
    "#ff80ab",
    "#ffc400",
    "#ff9100",
    "#00e676",
    "#00bcd4",
    "#d500f9",
  ];

  // Generate balloons with different styles
  for (let i = 0; i < 15; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";

    // Randomize balloon size, animation speed, and position
    const size = Math.random() * 30 + 50;
    const animationSpeed = Math.random() * 3 + 5;
    const balloonPosition = Math.random() * 100;

    balloon.style.width = `${size}px`;
    balloon.style.height = `${size * 1.4}px`;
    balloon.style.left = `${balloonPosition}%`;
    balloon.style.animationDuration = `${animationSpeed}s`;
    balloon.style.background = `radial-gradient(circle at bottom, ${
      colors[i % colors.length]
    } 30%, ${colors[(i + 1) % colors.length]})`;

    // Assign different animation keyframes
    if (i % 3 === 0) {
      balloon.style.animationName = "float";
    } else if (i % 3 === 1) {
      balloon.style.animationName = "float1";
    } else {
      balloon.style.animationName = "float2";
    }

    balloonsContainer.appendChild(balloon);
  }

  // Show the balloons
  balloonsContainer.style.display = "block";
});
